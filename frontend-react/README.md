# NeuroClass AI Frontend

O frontend é um aplicativo Next.js 15 que fornece a interface do usuário principal para o projeto NeuroClass AI.

## 🚀 Tecnologias
- Next.js 15
- React 18
- Tailwind CSS
- Axios

## 💻 Scripts úteis
```bash
npm install
npm run dev
npm run build
npm run start
```

## 🧪 Local
No diretório `frontend-react`:
```bash
npm install
npm run dev
```

O frontend é exposto na porta `3000` pelo Docker Compose e consome o backend e o AI Engine a partir de:
- `http://localhost:8080`
- `http://localhost:8000`

## ⚙️ Variáveis públicas
O Docker Compose define:
- `NEXT_PUBLIC_API_BASE_URL=http://localhost:8080`
- `NEXT_PUBLIC_AI_BASE_URL=http://localhost:8000`

## 📌 Observações
Este projeto usa a rota de aplicativo do Next.js e um layout global centralizado em `src/app`.
