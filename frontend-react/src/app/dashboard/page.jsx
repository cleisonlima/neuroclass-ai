'use client'

import { useMemo, useState } from 'react'

const initialStudents = [
  { name: 'Mariana Santos', course: 'Matemática', progress: '82%', engagement: 'Alto', risk: 'Médio' },
  { name: 'Lucas Oliveira', course: 'Física', progress: '68%', engagement: 'Médio', risk: 'Alto' },
  { name: 'Ana Carvalho', course: 'Biologia', progress: '91%', engagement: 'Alto', risk: 'Baixo' },
]

export default function DashboardPage() {
  const [students] = useState(initialStudents)

  const totals = useMemo(
    () => ({
      total_students: students.length,
      high_risk: students.filter((s) => s.risk === 'Alto').length,
      medium_risk: students.filter((s) => s.risk === 'Médio').length,
      low_risk: students.filter((s) => s.risk === 'Baixo').length,
    }),
    [students]
  )

  return (
    <main className="dashboard-shell">
      <section className="hero-panel">
        <div>
          <span className="cta-pill">Dashboard inteligente</span>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
            Controle pedagógico com insights imediatos.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            Veja o status de cada aluno, identifique riscos e crie planos de ação personalizados com rapidez.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="/chat" className="primary-button">
              Assistente IA
            </a>
            <a href="/" className="secondary-button">
              Voltar para Home
            </a>
          </div>
        </div>

        <div className="hero-grid">
          <article className="hero-card">
            <span className="card-label">Alunos registrados</span>
            <strong>{totals.total_students}</strong>
          </article>
          <article className="hero-card">
            <span className="card-label">Risco alto</span>
            <strong>{totals.high_risk}</strong>
          </article>
          <article className="hero-card">
            <span className="card-label">Risco médio</span>
            <strong>{totals.medium_risk}</strong>
          </article>
        </div>
      </section>

      <section className="section-grid">
        <aside className="sidebar-panel">
          <div className="insight-card">
            <h3>Resumo de risco</h3>
            <div className="risk-summary">
              <div>
                <strong>{totals.high_risk}</strong>
                <span>Alto</span>
              </div>
              <div>
                <strong>{totals.medium_risk}</strong>
                <span>Médio</span>
              </div>
              <div>
                <strong>{totals.low_risk}</strong>
                <span>Baixo</span>
              </div>
            </div>
          </div>

          <div className="insight-card">
            <h3>Próxima ação</h3>
            <p>Verifique os alunos em risco alto e defina planos de estudo mais frequentes.</p>
          </div>
        </aside>

        <div>
          <div className="panel-card form-card">
            <h3>Cadastrar aluno</h3>
            <div className="form-grid">
              <label>
                Nome do aluno
                <input type="text" placeholder="Nome completo" />
              </label>
              <label>
                Curso
                <select>
                  <option>Matemática</option>
                  <option>Física</option>
                  <option>Biologia</option>
                </select>
              </label>
              <label>
                Progresso
                <input type="text" placeholder="Ex: 74%" />
              </label>
              <label>
                Engajamento
                <select>
                  <option>Alto</option>
                  <option>Médio</option>
                  <option>Baixo</option>
                </select>
              </label>
            </div>
            <div className="mt-6 flex flex-wrap gap-4">
              <button type="button" className="primary-button">
                Salvar aluno
              </button>
              <button type="button" className="secondary-button">
                Limpar
              </button>
            </div>
          </div>

          <div className="result-card">
            <div className="result-header">
              <div>
                <h4>Alunos recentes</h4>
                <p className="result-note">Sacando o primeiro grupo de cadastros.</p>
              </div>
            </div>
            <div className="student-grid">
              {students.map((student) => (
                <div key={student.name} className="student-card">
                  <div className="student-header">
                    <strong>{student.name}</strong>
                    <span className="pill">{student.risk}</span>
                  </div>
                  <div className="student-meta">
                    <span>Curso: {student.course}</span>
                    <span>Progresso: {student.progress}</span>
                    <span>Engajamento: {student.engagement}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
