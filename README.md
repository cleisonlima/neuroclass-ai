# 🧠 NeuroClass AI

Plataforma inteligente para gestão acadêmica com interface moderna, análise de risco de alunos e recomendações personalizadas.

[![GitHub Actions](https://github.com/cleisonlima/neuroclass-ai/actions/workflows/deploy.yml/badge.svg)](https://github.com/cleisonlima/neuroclass-ai/actions/workflows/deploy.yml)

## 🌟 Visão geral
O NeuroClass AI integra:
- **Frontend** em Next.js 15 com Tailwind CSS e tema claro/escuro
- **Backend** em Spring Boot 3.2 com Spring Data JPA e PostgreSQL
- **AI Engine** em FastAPI para recomendações e análise de risco
- **Docker Compose** para orquestração de ambiente local completo

## 🚀 Principais funcionalidades
- Landing page responsiva e visual moderno
- Dashboard com perfil dos alunos, risco e recomendações
- Cadastro de alunos com progresso, engajamento e notas
- Relatórios de risco e plano de estudos gerados por AI
- Theme toggle claro/escuro no frontend
- Deploy local simplificado com Docker Compose

## 🧱 Tecnologias usadas
- Next.js 15, React 18, Tailwind CSS
- Java 21, Spring Boot 3.2, Spring Data JPA
- Python 3.11, FastAPI, Uvicorn
- PostgreSQL 15
- Docker, Docker Compose

## 📁 Estrutura do projeto
- `backend-spring/` - API Java Spring Boot
- `frontend-react/` - frontend Next.js 15
- `ai-engine/` - serviço Python FastAPI
- `docker-compose.yml` - orquestração dos serviços
- `.github/workflows/deploy.yml` - pipeline GitHub Actions

## 💻 Executando localmente
### 1. Subir todos os serviços
No diretório raiz:
```bash
docker compose up --build -d
```

### 2. Acessar a aplicação
- Frontend: `http://localhost:3000`
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
npm run start
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

## 🌐 Variáveis de ambiente
Os serviços usam as seguintes variáveis configuradas no `docker-compose.yml`:
- `NEXT_PUBLIC_API_BASE_URL=http://localhost:8080`
- `NEXT_PUBLIC_AI_BASE_URL=http://localhost:8000`

## ✅ GitHub Actions
O pipeline `deploy.yml` valida:
- build do backend Spring Boot
- build do frontend Next.js 15
- build e instalação do AI Engine Python

## 📌 Observações
- O frontend está configurado para apontar ao backend e AI Engine via variáveis públicas.
- O projeto já está pronto para execução local e pode ser adaptado para deploy em nuvem.
