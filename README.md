# 🧠 NeuroClass AI

Plataforma inteligente para gestão acadêmica com interface moderna, análise de risco de alunos e recomendações personalizadas.

[![GitHub Actions](https://github.com/cleisonlima/neuroclass-ai/actions/workflows/deploy.yml/badge.svg)](https://github.com/cleisonlima/neuroclass-ai/actions/workflows/deploy.yml)

## 🌟 Visão geral
O NeuroClass AI integra:
- **Frontend** moderno em React + Vite com tema claro/escuro
- **Backend** em Spring Boot com Spring Data JPA e PostgreSQL
- **AI Engine** em FastAPI para análises e recomendações
- **Docker Compose** para ambiente local completo

## 🚀 Principais funcionalidades
- Interface de landing page premium e responsiva
- Dashboard com métricas de alunos e risco
- Cadastro de alunos com progresso, engajamento e notas
- Recomendação de estudos baseada em dados do aluno
- Theme toggle claro/escuro no frontend
- Orquestração e deploy local via Docker Compose

## 🧱 Tecnologias usadas
- React, Vite, Tailwind CSS
- Java 21, Spring Boot 3.2, Spring Data JPA
- Python 3.11, FastAPI, Uvicorn
- PostgreSQL 15
- Docker, Docker Compose

## 📁 Estrutura do projeto
- `backend-spring/` - API Java Spring Boot
- `frontend-react/` - SPA React + Vite
- `ai-engine/` - serviço Python FastAPI
- `docker-compose.yml` - orquestração dos serviços
- `.github/workflows/deploy.yml` - pipeline GitHub Actions

## 💻 Executando localmente
### 1. Docker Compose
No diretório raiz:
```bash
docker compose up --build -d
```

### 2. Endpoints
- Frontend: `http://localhost:5173`
- Backend: `http://localhost:8080`
- AI Engine: `http://localhost:8000`

### 3. Parar o ambiente
```bash
docker compose down
```

## 🛠️ Comandos manuais
### Frontend
```bash
cd frontend-react
npm install
npm run build
```

### Backend
```bash
cd backend-spring
mvn -B -DskipTests package
```

### AI Engine
```bash
cd ai-engine
python -m pip install --upgrade pip
pip install -r requirements.txt
```

## ✅ GitHub Actions
O pipeline `deploy.yml` valida:
- build do backend Spring Boot
- build do frontend React + Vite
- instalação e validação do AI Engine Python

## 📌 Observações
- O frontend usa `VITE_API_BASE_URL` e `VITE_AI_BASE_URL` para comunicação entre serviços.
- A aplicação está pronta para ser executada localmente ou adaptada para deploy em nuvem.
