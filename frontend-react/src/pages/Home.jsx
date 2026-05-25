import { Link } from 'react-router-dom'

function Home() {
  return (
    <main className="app-shell hero-gradient min-h-screen py-16">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-4 sm:px-6 lg:px-8">
        <section className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div className="max-w-2xl">
            <span className="cta-pill">Plataforma SaaS acadêmica premium</span>
            <h1 className="mt-8 text-5xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-6xl">
              Gestão acadêmica inteligente com insights de aprendizagem em tempo real.
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
              Use dados, AI e métricas visuais para antecipar riscos, personalizar estudos e aumentar a retenção de alunos.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/dashboard"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 px-8 py-3 text-sm font-semibold text-white shadow-glow transition hover:brightness-110"
              >
                Começar agora
              </Link>
              <Link
                to="/dashboard"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white/90 px-8 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-100 dark:border-slate-700/80 dark:bg-slate-900/80 dark:text-slate-100 dark:hover:bg-slate-800"
              >
                Ver dashboard
              </Link>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              <div className="card-accent p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-violet-600 dark:text-violet-300">Crescimento</p>
                <p className="mt-3 text-3xl font-semibold text-slate-950 dark:text-white">+32%</p>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Retenção de alunos em 30 dias</p>
              </div>
              <div className="card-accent p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-600 dark:text-cyan-300">Ações</p>
                <p className="mt-3 text-3xl font-semibold text-slate-950 dark:text-white">12</p>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Intervenções recomendadas automaticamente</p>
              </div>
              <div className="card-accent p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600 dark:text-emerald-300">Engajamento</p>
                <p className="mt-3 text-3xl font-semibold text-slate-950 dark:text-white">9.4</p>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Índice médio de participação</p>
              </div>
            </div>
          </div>

          <aside className="grid gap-5">
            <div className="glass-card p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-violet-600 dark:text-violet-300">Insights automáticos</p>
              <h2 className="mt-5 text-3xl font-semibold text-slate-950 dark:text-white">Identifique alunos em risco antes que seja tarde.</h2>
              <p className="mt-4 text-slate-600 dark:text-slate-300">Painéis intuitivos e decisões acionáveis para reduzir evasão e elevar resultados.</p>
            </div>
            <div className="glass-card p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-600 dark:text-cyan-300">Recomendações premium</p>
              <h2 className="mt-5 text-3xl font-semibold text-slate-950 dark:text-white">Planos de estudo personalizados por aluno.</h2>
              <p className="mt-4 text-slate-600 dark:text-slate-300">Sugestões baseadas em desempenho, engajamento e perfil de aprendizado.</p>
            </div>
          </aside>
        </section>

        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <article className="feature-panel">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-violet-600 dark:text-violet-300">Visão geral</p>
            <h3 className="mt-4 text-2xl font-semibold text-slate-950 dark:text-white">Mapa de desempenho</h3>
            <p className="mt-3 text-slate-600 dark:text-slate-300">Acompanhe pontos críticos, progresso por disciplina e prioridades de ação.</p>
          </article>
          <article className="feature-panel">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-600 dark:text-cyan-300">Operações</p>
            <h3 className="mt-4 text-2xl font-semibold text-slate-950 dark:text-white">Cadastro rápido</h3>
            <p className="mt-3 text-slate-600 dark:text-slate-300">Registre novos alunos com dados completos de progresso e engajamento.</p>
          </article>
          <article className="feature-panel">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-600 dark:text-emerald-300">Conversa inteligente</p>
            <h3 className="mt-4 text-2xl font-semibold text-slate-950 dark:text-white">Chat IA</h3>
            <p className="mt-3 text-slate-600 dark:text-slate-300">Pergunte ao assistente e receba insights em linguagem natural.</p>
          </article>
        </section>
      </div>
    </main>
  )
}

export default Home
