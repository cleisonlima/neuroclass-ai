# TODO - Upgrade aparência e funcionalidades (NeuroClass AI)

- [x] Revisar páginas do frontend: dashboard e chat.


- [x] Atualizar Dashboard para:



  - [x] Carregar alunos reais de `GET /students`.

  - [x] Implementar formulário de cadastro com `POST /students`.

  - [x] Calcular e/ou buscar risco via AI (`GET /student-risk`).

  - [ ] Atualizar UI após salvar (loading/erro).

- [ ] Atualizar Chat para:
  - [ ] Melhorar UX (spinner, estados, erros).
  - [ ] Opcional: mostrar insights/riscos na tela via `GET /student-risk`.
  - [ ] Melhorar renderização do texto (remover `dangerouslySetInnerHTML`).

- [ ] Melhorar CSS (`frontend-react/src/app/App.css`) para consistência e componentes de status/loading.


- [x] Rodar `docker compose up --build -d`.

- [ ] Validar manualmente:


  - [ ] `http://localhost:3000/dashboard`
  - [ ] `http://localhost:3000/chat`


