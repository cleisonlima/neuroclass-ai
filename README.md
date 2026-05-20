# 🧠 NeuroClass AI

Plataforma inteligente para gestão acadêmica, com monitoramento de alunos, análise de risco e recomendações personalizadas.

## 🔧 Tecnologias
- Backend: Spring Boot + Spring Data JPA
- Frontend: React + Vite
- AI Engine: FastAPI
- Banco de dados: PostgreSQL
- Orquestração: Docker Compose

## ✅ Funcionalidades implementadas
- Página inicial convidativa com chamadas para o dashboard
- Dashboard com métricas de alunos, cursos e risco
- Cadastro de alunos com progresso, horas de estudo e engajamento
- Recomendação e plano de estudo baseado em interesses
- Seed data inicial no backend (via `DataInitializer`)
- Docker Compose funcionando e deploy local validado

## ▶️ Como executar

No diretório raiz do projeto:

```bash
docker compose up --build -d
```

Acesse a aplicação em:

- Frontend: `http://localhost:5173`
- Backend: `http://localhost:8080`
- AI Engine: `http://localhost:8000`

## 📁 Estrutura principal
- `backend-spring/` - API Java Spring Boot para gerenciamento de alunos
- `frontend-react/` - SPA React com rotas para Home e Dashboard
- `ai-engine/` - serviço Python FastAPI para recomendações e análise
- `docker-compose.yml` - orquestração dos serviços

## 🧪 Testes rápidos
- A Home deve abrir com CTA para `Dashboard`
- O Dashboard deve mostrar cards de alunos e risco
- O cadastro de aluno deve atualizar a lista e métricas

## 🚀 Push no GitHub
Este README foi atualizado e o projeto foi enviado para o repositório remoto.
