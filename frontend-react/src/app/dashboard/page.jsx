'use client'


import { useEffect, useMemo, useState } from 'react'
import axios from 'axios'

const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8080'
const aiUrl = process.env.NEXT_PUBLIC_AI_BASE_URL || 'http://localhost:8000'

function normalizeEngagement(value) {
  const v = String(value || '').trim().toLowerCase()
  if (!v) return 'medium'
  if (['alto', 'high', 'a', 'h'].includes(v)) return 'high'
  if (['baixo', 'low', 'b', 'l'].includes(v)) return 'low'
  return 'medium'
}

export default function DashboardPage() {
  const [students, setStudents] = useState([])
  const [riskList, setRiskList] = useState([])
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState(null)

  const [form, setForm] = useState({
    name: '',
    course: 'Matemática',
    progressPercent: '',
    weeklyStudyHours: '5',
    engagementLevel: 'medium',
  })

  const totals = useMemo(() => {
    const high_risk = riskList.filter((s) => s.risk_level === 'high').length
    const medium_risk = riskList.filter((s) => s.risk_level === 'medium').length
    const low_risk = riskList.filter((s) => s.risk_level === 'low').length
    return {
      total_students: students.length,
      high_risk,
      medium_risk,
      low_risk,
    }
  }, [students.length, riskList])


  useEffect(() => {
    let mounted = true

    const load = async () => {
      try {
        setLoading(true)
        setError(null)

        const [studentsRes, riskRes] = await Promise.all([
          axios.get(`${apiUrl}/students`),
          axios.get(`${aiUrl}/student-risk`),
        ])

        if (!mounted) return
        const studentsData = studentsRes.data || []
        setStudents(studentsData)
        setRiskList(riskRes.data?.risk_list || [])
      } catch (e) {
        if (!mounted) return
        setError('Falha ao carregar alunos/risco. Verifique as conexões.')
      } finally {
        if (!mounted) return
        setLoading(false)
      }
    }

    load()
    return () => {
      mounted = false
    }
  }, [])

  const riskByStudentId = useMemo(() => {
    const m = new Map()
    for (const item of riskList || []) {
      if (item.student_id != null) m.set(item.student_id, item)
    }
    return m
  }, [riskList])

  const onChange = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }))
  }

  const onReset = () => {
    setForm({
      name: '',
      course: 'Matemática',
      progressPercent: '',
      weeklyStudyHours: '5',
      engagementLevel: 'medium',
    })
  }

  const onSave = async () => {
    if (!form.name.trim()) return
    setSaving(true)
    setError(null)

    try {
      const payload = {
        name: form.name.trim(),
        course: form.course,
        progressPercent: Number(String(form.progressPercent).replace('%', '')) || 0,
        weeklyStudyHours: Number(form.weeklyStudyHours) || 0,
        engagementLevel: normalizeEngagement(form.engagementLevel),
      }

      await axios.post(`${apiUrl}/students`, payload)

      const [studentsRes, riskRes] = await Promise.all([
        axios.get(`${apiUrl}/students`),
        axios.get(`${aiUrl}/student-risk`),
      ])

      setStudents(studentsRes.data || [])
      setRiskList(riskRes.data?.risk_list || [])
      onReset()
    } catch (e) {
      setError('Falha ao salvar aluno.')
    } finally {
      setSaving(false)
    }
  }

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
            {loading ? (
              <p className="text-sm text-slate-600 dark:text-slate-300">Carregando...</p>
            ) : (
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
            )}
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
                <input
                  type="text"
                  placeholder="Nome completo"
                  value={form.name}
                  onChange={(e) => onChange('name', e.target.value)}
                />
              </label>
              <label>
                Curso
                <select value={form.course} onChange={(e) => onChange('course', e.target.value)}>
                  <option>Matemática</option>
                  <option>Física</option>
                  <option>Biologia</option>
                </select>
              </label>
              <label>
                Progresso
                <input
                  type="text"
                  placeholder="Ex: 74%"
                  value={form.progressPercent}
                  onChange={(e) => onChange('progressPercent', e.target.value)}
                />
              </label>
              <label>
                Engajamento
                <select
                  value={form.engagementLevel}
                  onChange={(e) => onChange('engagementLevel', e.target.value)}
                >
                  <option value="high">Alto</option>
                  <option value="medium">Médio</option>
                  <option value="low">Baixo</option>
                </select>
              </label>
            </div>

            {error && <p className="mt-3 text-sm text-red-600">{error}</p>}

            <div className="mt-6 flex flex-wrap gap-4">
              <button
                type="button"
                className="primary-button"
                onClick={onSave}
                disabled={saving}
              >
                {saving ? 'Salvando...' : 'Salvar aluno'}
              </button>
              <button type="button" className="secondary-button" onClick={onReset} disabled={saving}>
                Limpar
              </button>
            </div>
          </div>

          <div className="result-card">
            <div className="result-header">
              <div>
                <h4>Alunos recentes</h4>
                <p className="result-note">Atualizado a partir do backend.</p>
              </div>
            </div>

            {loading ? (
              <p className="text-sm text-slate-600 dark:text-slate-300">Carregando alunos...</p>
            ) : (
              <div className="student-grid">
                {students.map((student) => {
                  const risk = riskByStudentId.get(student.id)
                  const riskLabel = risk?.risk_level
                    ? risk.risk_level === 'high'
                      ? 'Alto'
                      : risk.risk_level === 'medium'
                        ? 'Médio'
                        : 'Baixo'
                    : '—'

                  return (
                    <div key={student.id ?? student.name} className="student-card">
                      <div className="student-header">
                        <strong>{student.name}</strong>
                        <span className="pill">{riskLabel}</span>
                      </div>
                      <div className="student-meta">
                        <span>Curso: {student.course}</span>
                        <span>Progresso: {student.progressPercent ?? 0}%</span>
                        <span>Engajamento: {String(student.engagementLevel || '').toLowerCase() || 'medium'}</span>
                      </div>
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}

