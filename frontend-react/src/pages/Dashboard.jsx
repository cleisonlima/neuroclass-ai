import { useEffect, useState } from 'react'
import axios from 'axios'

function Dashboard() {
  const [students, setStudents] = useState([])
  const [name, setName] = useState('')
  const [course, setCourse] = useState('')
  const [progressPercent, setProgressPercent] = useState('')
  const [weeklyHours, setWeeklyHours] = useState('')
  const [engagementLevel, setEngagementLevel] = useState('medium')
  const [insights, setInsights] = useState({ total_students: 0, course_distribution: {}, most_popular_course: null })
  const [recommendation, setRecommendation] = useState(null)
  const [riskReport, setRiskReport] = useState({ total_students: 0, high_risk: 0, medium_risk: 0, low_risk: 0, risk_list: [] })
  const [studyPlan, setStudyPlan] = useState(null)
  const [interest, setInterest] = useState('')
  const apiUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080'
  const aiUrl = import.meta.env.VITE_AI_BASE_URL || 'http://localhost:8000'

  const fetchStudents = () => {
    axios.get(`${apiUrl}/students`)
      .then(response => setStudents(response.data))
      .catch(() => setStudents([]))
  }

  const fetchAiInsights = () => {
    axios.get(`${aiUrl}/insights`)
      .then(response => setInsights(response.data))
      .catch(() => setInsights({ total_students: 0, course_distribution: {}, most_popular_course: null }))
  }

  const fetchRiskReport = () => {
    axios.get(`${aiUrl}/student-risk`)
      .then(response => setRiskReport(response.data))
      .catch(() => setRiskReport({ total_students: 0, high_risk: 0, medium_risk: 0, low_risk: 0, risk_list: [] }))
  }

  useEffect(() => {
    fetchStudents()
    fetchAiInsights()
    fetchRiskReport()
  }, [])

  const handleAddStudent = async (event) => {
    event.preventDefault()
    if (!name.trim() || !course.trim()) return

    try {
      await axios.post(`${apiUrl}/students`, {
        name: name.trim(),
        course: course.trim(),
        progressPercent: Number(progressPercent) || 0,
        weeklyStudyHours: Number(weeklyHours) || 0,
        engagementLevel
      })
      setName('')
      setCourse('')
      setProgressPercent('')
      setWeeklyHours('')
      setEngagementLevel('medium')
      fetchStudents()
      fetchAiInsights()
      fetchRiskReport()
    } catch (error) {
      console.error(error)
    }
  }

  const handleRecommendation = async (event) => {
    event.preventDefault()
    await axios.post(`${aiUrl}/recommend`, { interests: interest.trim() })
      .then(response => setRecommendation(response.data))
      .catch(() => setRecommendation(null))
  }

  const handleStudyPlan = async (event) => {
    event.preventDefault()
    await axios.post(`${aiUrl}/study-plan`, {
      current_course: course.trim() || undefined,
      interests: interest.trim() || undefined,
      progressPercent: Number(progressPercent) || undefined,
      weeklyStudyHours: Number(weeklyHours) || undefined,
      engagementLevel
    })
      .then(response => setStudyPlan(response.data))
      .catch(() => setStudyPlan(null))
  }

  const courseCounts = Object.entries(insights.course_distribution || {}).map(([courseName, count]) => ({ courseName, count }))
  const maxCourseCount = Math.max(...courseCounts.map(item => item.count), 1)

  return (
    <main className="dashboard-shell">
      <section className="hero-panel">
        <div className="hero-copy">
          <span className="eyebrow">Dashboard</span>
          <h2>Visualize desempenho, risco e recomendações com clareza.</h2>
          <p>O dashboard apresenta apenas informações úteis para ação, sem expor detalhes de infraestrutura.</p>
        </div>

        <div className="hero-grid">
          <article className="hero-card">
            <span className="card-label">Alunos registrados</span>
            <strong>{insights.total_students}</strong>
          </article>
          <article className="hero-card">
            <span className="card-label">Curso mais popular</span>
            <strong>{insights.most_popular_course || 'Nenhum ainda'}</strong>
          </article>
          <article className="hero-card">
            <span className="card-label">Alto risco</span>
            <strong>{riskReport.high_risk}</strong>
          </article>
        </div>
      </section>

      <section className="section-grid">
        <aside className="sidebar-panel">
          <div className="insight-card">
            <h3>Alunos em risco</h3>
            <div className="risk-summary">
              <div>
                <strong>{riskReport.high_risk}</strong>
                <span>Alto</span>
              </div>
              <div>
                <strong>{riskReport.medium_risk}</strong>
                <span>Médio</span>
              </div>
              <div>
                <strong>{riskReport.low_risk}</strong>
                <span>Baixo</span>
              </div>
            </div>
          </div>

          <div className="insight-card">
            <h3>Cursos</h3>
            {courseCounts.length === 0 ? (
              <p>Nenhum curso cadastrado ainda.</p>
            ) : (
              courseCounts.map(item => (
                <div key={item.courseName} className="course-row compact-row">
                  <span>{item.courseName}</span>
                  <strong>{item.count}</strong>
                </div>
              ))
            )}
          </div>
        </aside>

        <div className="content-panel">
          <div className="panel-card form-card">
            <h3>Adicionar novo aluno</h3>
            <form onSubmit={handleAddStudent} className="form-grid">
              <label>
                Nome do aluno
                <input value={name} onChange={e => setName(e.target.value)} placeholder="Nome completo" />
              </label>
              <label>
                Curso
                <input value={course} onChange={e => setCourse(e.target.value)} placeholder="Ex: Programação" />
              </label>
              <label>
                Progresso %
                <input type="number" min="0" max="100" value={progressPercent} onChange={e => setProgressPercent(e.target.value)} placeholder="45" />
              </label>
              <label>
                Horas semanais
                <input type="number" min="0" step="0.5" value={weeklyHours} onChange={e => setWeeklyHours(e.target.value)} placeholder="6" />
              </label>
              <label>
                Engajamento
                <select value={engagementLevel} onChange={e => setEngagementLevel(e.target.value)}>
                  <option value="high">Alto</option>
                  <option value="medium">Médio</option>
                  <option value="low">Baixo</option>
                </select>
              </label>
              <button className="primary-button" type="submit">Salvar aluno</button>
            </form>
          </div>

          <div className="panel-card form-card">
            <h3>Recomendações</h3>
            <form onSubmit={handleRecommendation} className="form-grid">
              <label>
                Interesses do aluno
                <input value={interest} onChange={e => setInterest(e.target.value)} placeholder="programação, design, dados" />
              </label>
              <button className="secondary-button" type="submit">Criar recomendação</button>
            </form>
          </div>

          {studyPlan && (
            <div className="panel-card result-card">
              <div className="result-header">
                <div>
                  <h4>{studyPlan.suggested_course}</h4>
                  <p className="result-note">{studyPlan.notes}</p>
                </div>
                <span className="pill success">Confiança {Math.round(studyPlan.confidence * 100)}%</span>
              </div>
              <ul className="result-list">
                {studyPlan.study_plan.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="panel-card chart-card">
            <h3>Visão de cursos</h3>
            {courseCounts.length === 0 ? (
              <p>Nenhum curso disponível.</p>
            ) : (
              <div className="course-bars">
                {courseCounts.map(item => (
                  <div key={item.courseName} className="course-row">
                    <span>{item.courseName}</span>
                    <div className="progress-bar">
                      <div style={{ width: `${(item.count / maxCourseCount) * 100}%` }} />
                    </div>
                    <strong>{item.count}</strong>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Dashboard
