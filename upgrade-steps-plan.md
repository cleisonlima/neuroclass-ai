# Plano de up (aparência + funcionalidades)

## Objetivo
Deixar Dashboard e Chat mais completos: dados reais, cadastro funcional, riscos por AI e uma UX mais “premium”.

## Escopo
- **Dashboard** (`frontend-react/src/app/dashboard/page.jsx`)
  - Carregar alunos reais via `GET /students`.
  - Cadastro via `POST /students`.
  - Exibir contagem de riscos via `POST/GET do AI` (usaremos `GET /student-risk`).
  - Form e UI com estados: loading, erro, sucesso.
- **Chat** (`frontend-react/src/app/chat/page.jsx`)
  - UX com loading e erros mais claros.
  - Melhorar renderização do texto removendo `dangerouslySetInnerHTML`.
  - Mostrar insights/riscos iniciais usando `GET /student-risk` (ou `GET /insights`).
- **CSS** (`frontend-react/src/app/App.css`)
  - Componentes: `btn-primary/btn-secondary`, `alert`, `skeleton`, `spinner` etc.

## Validação
- Rodar: `docker compose up --build -d`
- Conferir:
  - `http://localhost:3000/dashboard`
  - `http://localhost:3000/chat`

