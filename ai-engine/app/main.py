
from typing import List, Optional

import pandas as pd
import requests
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()
BACKEND_URL = 'http://backend:8080'

class Student(BaseModel):
    id: Optional[int]
    name: str
    course: str
    progressPercent: Optional[int] = 0
    weeklyStudyHours: Optional[float] = 0.0
    engagementLevel: Optional[str] = 'medium'

class RecommendationRequest(BaseModel):
    current_course: Optional[str] = None
    interests: Optional[str] = None

class StudyPlanRequest(BaseModel):
    current_course: Optional[str] = None
    interests: Optional[str] = None
    progressPercent: Optional[int] = None
    weeklyStudyHours: Optional[float] = None
    engagementLevel: Optional[str] = None

class RecommendationResponse(BaseModel):
    recommended_course: str
    confidence: float
    reason: str
    popular_courses: dict

class RiskItem(BaseModel):
    student_id: Optional[int]
    student_name: str
    course: str
    risk_level: str
    reason: str

class RiskResponse(BaseModel):
    total_students: int
    high_risk: int
    medium_risk: int
    low_risk: int
    risk_list: List[RiskItem]

class StudyPlanResponse(BaseModel):
    suggested_course: str
    confidence: float
    notes: str
    study_plan: List[str]


def fetch_students() -> List[Student]:
    try:
        response = requests.get(f'{BACKEND_URL}/students', timeout=5)
        response.raise_for_status()
        return [Student(**item) for item in response.json()]
    except Exception:
        return []


def normalize_engagement(level: Optional[str]) -> str:
    if not level:
        return 'medium'
    value = level.strip().lower()
    if value in ['alto', 'high', 'a', 'h']:
        return 'high'
    if value in ['baixo', 'low', 'b', 'l']:
        return 'low'
    return 'medium'


def build_insights(students: List[Student]) -> dict:
    if not students:
        return {
            'total_students': 0,
            'course_distribution': {},
            'most_popular_course': None,
            'labels': [],
            'values': []
        }

    df = pd.DataFrame([student.dict() for student in students])
    distribution = df['course'].value_counts().to_dict()
    most_popular = max(distribution.items(), key=lambda item: item[1])[0]

    return {
        'total_students': len(df),
        'course_distribution': distribution,
        'most_popular_course': most_popular,
        'labels': list(distribution.keys()),
        'values': list(distribution.values())
    }


def classify_risk(student: Student) -> RiskItem:
    progress = student.progressPercent or 0
    hours = student.weeklyStudyHours or 0.0
    engagement = normalize_engagement(student.engagementLevel)
    reason_parts = []

    if progress < 50:
        reason_parts.append('progresso baixo')
    if hours < 4:
        reason_parts.append('horas de estudo insuficientes')
    if engagement == 'low':
        reason_parts.append('engajamento baixo')

    if progress < 50 or hours < 4 or engagement == 'low':
        risk = 'high'
    elif progress < 70 or hours < 7 or engagement == 'medium':
        risk = 'medium'
    else:
        risk = 'low'

    reason = ', '.join(reason_parts) if reason_parts else 'perfil saudável de estudo'
    return RiskItem(
        student_id=student.id,
        student_name=student.name,
        course=student.course,
        risk_level=risk,
        reason=reason
    )


def build_risk_profile(students: List[Student]) -> dict:
    risk_list = [classify_risk(student) for student in students]
    high = sum(1 for item in risk_list if item.risk_level == 'high')
    medium = sum(1 for item in risk_list if item.risk_level == 'medium')
    low = sum(1 for item in risk_list if item.risk_level == 'low')

    return {
        'total_students': len(students),
        'high_risk': high,
        'medium_risk': medium,
        'low_risk': low,
        'risk_list': risk_list
    }


def build_study_plan(request: StudyPlanRequest, students: List[Student]) -> StudyPlanResponse:
    distribution = build_insights(students)['course_distribution']
    recommended_course = request.current_course or 'Avaliação de Curso'
    notes = 'Plano baseado nos dados atuais dos alunos e no perfil informado.'
    steps = []

    if request.interests:
        interests = request.interests.lower()
        match_scores = {
            course: sum(1 for token in interests.split() if token in course.lower())
            for course in distribution
        }
        if match_scores:
            best_match = max(match_scores.items(), key=lambda item: item[1])
            if best_match[1] > 0:
                recommended_course = best_match[0]
                notes = f"Recomendado de acordo com interesses: '{request.interests}'."

    progress = request.progressPercent or 0
    hours = request.weeklyStudyHours or 0.0
    engagement = normalize_engagement(request.engagementLevel)

    if progress < 50:
        steps.append('Revisar os conceitos básicos antes de avançar.')
    if hours < 5:
        steps.append('Aumentar o tempo de estudo para pelo menos 5 horas por semana.')
    if engagement == 'low':
        steps.append('Criar um plano semanal de estudo com metas claras.')
    if not steps:
        steps.append('Mantenha o ritmo atual e revise os tópicos mais fracos regularmente.')

    if distribution and recommended_course == 'Avaliação de Curso':
        recommended_course = max(distribution.items(), key=lambda item: item[1])[0]
        notes = 'Sugerido curso mais popular entre os alunos atuais.'

    confidence = 0.6
    if progress >= 70 and engagement == 'high':
        confidence = 0.95
    elif progress >= 50:
        confidence = 0.8

    return StudyPlanResponse(
        suggested_course=recommended_course,
        confidence=round(confidence, 2),
        notes=notes,
        study_plan=steps
    )


@app.get('/')
def home():
    return {'message': 'NeuroClass AI Running'}


@app.get('/insights')
def insights():
    students = fetch_students()
    data = build_insights(students)
    return {
        'message': 'Insights AI calculados',
        'students': len(students),
        **data
    }


@app.get('/student-risk', response_model=RiskResponse)
def student_risk():
    students = fetch_students()
    return build_risk_profile(students)


@app.post('/study-plan', response_model=StudyPlanResponse)
def study_plan(request: StudyPlanRequest):
    students = fetch_students()
    return build_study_plan(request, students)


@app.post('/recommend', response_model=RecommendationResponse)
def recommend(request: RecommendationRequest):
    students = fetch_students()
    insights_data = build_insights(students)
    distribution = insights_data['course_distribution']
    if not distribution:
        return RecommendationResponse(
            recommended_course='Análise de dados',
            confidence=0.5,
            reason='Nenhum curso cadastrado ainda, sugerindo um curso de alta demanda geral.',
            popular_courses=distribution
        )

    top_course = insights_data['most_popular_course']
    recommended = top_course
    reason = 'Curso mais popular entre os alunos atuais.'

    if request.interests:
        interests = request.interests.lower()
        scores = {
            course: sum(1 for token in interests.split() if token in course.lower())
            for course in distribution
        }
        best_match = max(scores.items(), key=lambda item: item[1])
        if best_match[1] > 0:
            recommended = best_match[0]
            reason = f"Recomendado a partir dos interesses: '{request.interests}'."

    confidence = min(1.0, (distribution.get(recommended, 1) / max(distribution.values())) * 0.9 + 0.1)
    return RecommendationResponse(
        recommended_course=recommended,
        confidence=round(confidence, 2),
        reason=reason,
        popular_courses=distribution
    )
