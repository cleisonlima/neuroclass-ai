'use client'

import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="app-shell hero-gradient min-h-screen py-16">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-4 sm:px-6 lg:px-8">
        <section className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="max-w-2xl">
            <span className="cta-pill">Plataforma SaaS acadêmica premium</span>
            <h1 className="mt-8 text-5xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-6xl">
              Gestão acadêmica inteligente com insights de aprendizagem em tempo real.
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
              Antecipe riscos, personalize estudos e aumente a retenção de alunos com uma interface clara e decisões acionáveis.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/dashboard"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 px-8 py-3 text-sm font-semibold text-white shadow-glow transition hover:brightness-110"
              >
                Começar agora
              </Link>
              <Link
                href="/chat"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white/90 px-8 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-100 dark:border-slate-700/80 dark:bg-slate-900/80 dark:text-slate-100 dark:hover:bg-slate-800"
              >
                Consultar assistente
              </Link>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              <div className="card-accent p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-violet-600 dark:text-violet-300">Crescimento</p>
                <p className="mt-3 text-3xl font-semibold text-slate-950 dark:text-white">+32%</p>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Aumento de retenção em 30 dias</p>
              </div>
              <div className="card-accent p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-600 dark:text-cyan-300">Automação</p>
                <p className="mt-3 text-3xl font-semibold text-slate-950 dark:text-white">12x</p>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Ações recomendadas automaticamente</p>
              </div>
              <div className="card-accent p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600 dark:text-emerald-300">Engajamento</p>
                <p className="mt-3 text-3xl font-semibold text-slate-950 dark:text-white">9.4</p>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Pontuação média de participação</p>
              </div>
            </div>
          </div>

          <aside className="grid gap-5">
            <div className="glass-card p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-violet-600 dark:text-violet-300">Insights automáticos</p>
              <h2 className="mt-5 text-3xl font-semibold text-slate-950 dark:text-white">Identifique alunos em risco antes que seja tarde.</h2>
              <p className="mt-4 text-slate-600 dark:text-slate-300">Painéis intuitivos e decisões acionáveis ajudam educadores a agir com confiança.</p>
              <div className="mt-8 grid gap-4">
                <div className="rounded-3xl bg-slate-50 p-4 dark:bg-slate-900/80">
                  <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">Monitoramento contínuo</p>
                  <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Dados ao vivo para cada turma e aluno.</p>
                </div>
                <div className="rounded-3xl bg-slate-50 p-4 dark:bg-slate-900/80">
                  <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">Alertas imediatos</p>
                  <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Identifique riscos com antecedência.</p>
                </div>
              </div>
            </div>
            <div className="glass-card p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-600 dark:text-cyan-300">Recomendações premium</p>
              <h2 className="mt-5 text-3xl font-semibold text-slate-950 dark:text-white">Planos de estudo personalizados por aluno.</h2>
              <p className="mt-4 text-slate-600 dark:text-slate-300">Sugestões baseadas em desempenho, engajamento e perfil de aprendizado para cada caso.</p>
              <div className="mt-8 grid gap-4">
                <div className="rounded-3xl bg-slate-50 p-4 dark:bg-slate-900/80">
                  <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">Apoio inteligente</p>
                  <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Privilegia o que cada aluno precisa.</p>
                </div>
                <div className="rounded-3xl bg-slate-50 p-4 dark:bg-slate-900/80">
                  <p className="text-sm font-semibold text-slate-700 dark:text-white">Resultados claros</p>
                  <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Decisões mais rápidas e precisas.</p>
                </div>
              </div>
            </div>
          </aside>
        </section>

        <section className="grid gap-8 lg:grid-cols-[1fr_0.82fr] xl:grid-cols-[1fr_0.82fr]">
          <div className="glass-card p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-violet-600 dark:text-violet-300">O que o NeuroClass entrega</p>
            <h2 className="mt-4 text-3xl font-semibold text-slate-950 dark:text-white">Tudo que você precisa para gerir turmas mais engajadas.</h2>
            <p className="mt-4 text-slate-600 dark:text-slate-300">De dashboards limpos a relatórios inteligentes e um assistente prático para suporte pedagógico.</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-slate-200/80 bg-white/90 p-5 dark:border-slate-700/80 dark:bg-slate-950/80">
                <p className="text-sm font-semibold text-slate-900 dark:text-white">Visão 360°</p>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Perfis completos de alunos em um único painel.</p>
              </div>
              <div className="rounded-3xl border border-slate-200/80 bg-white/90 p-5 dark:border-slate-700/80 dark:bg-slate-950/80">
                <p className="text-sm font-semibold text-slate-900 dark:text-white">Ações recomendadas</p>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Recomendações práticas para cada risco identificado.</p>
              </div>
              <div className="rounded-3xl border border-slate-200/80 bg-white/90 p-5 dark:border-slate-700/80 dark:bg-slate-950/80">
                <p className="text-sm font-semibold text-slate-900 dark:text-white">Chat IA</p>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Respostas imediatas para dúvidas de gestão pedagógica.</p>
              </div>
              <div className="rounded-3xl border border-slate-200/80 bg-white/90 p-5 dark:border-slate-700/80 dark:bg-slate-950/80">
                <p className="text-sm font-semibold text-slate-900 dark:text-white">Design moderno</p>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Interface intuitiva com tema claro e escuro.</p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200/20 bg-gradient-to-br from-violet-600/10 via-cyan-100/40 to-slate-100/60 p-8 shadow-glow backdrop-blur-xl dark:border-slate-700/80 dark:from-violet-500/15 dark:via-slate-900/70 dark:to-slate-950/90">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Resultados visíveis</p>
            <h2 className="mt-4 text-3xl font-semibold text-slate-950 dark:text-white">Transforme dados em decisões de alto impacto.</h2>
            <p className="mt-4 text-slate-700 dark:text-slate-300">Um ambiente pronto para uso que reúne análise, acompanhamento e recomendações em uma única plataforma.</p>
            <div className="mt-8 grid gap-4">
              <div className="rounded-3xl bg-white/90 p-5 dark:bg-slate-950/80">
                <p className="text-sm font-semibold text-slate-900 dark:text-white">Adoção mais rápida</p>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Comece a usar em minutos com Docker e interface web fácil.</p>
              </div>
              <div className="rounded-3xl bg-white/90 p-5 dark:bg-slate-950/80">
                <p className="text-sm font-semibold text-slate-900 dark:text-white">Evolução constante</p>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Estrutura modular pensada para ampliar relatórios e inteligência.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-[2rem] border border-slate-200/20 bg-white/90 p-10 text-center shadow-glow dark:border-slate-700/80 dark:bg-slate-950/95">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-600 dark:text-violet-300">Pronto para transformar?</p>
          <h2 className="mt-4 text-4xl font-semibold text-slate-950 dark:text-white">A melhor plataforma para gestão acadêmica com IA.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600 dark:text-slate-300">Combine análise de risco, recomendações personalizadas e um dashboard moderno para oferecer um acompanhamento mais eficiente aos seus alunos.</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/dashboard"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 px-10 py-4 text-sm font-semibold text-white shadow-glow transition hover:brightness-110"
            >
              Abrir dashboard
            </Link>
            <Link
              href="/chat"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-slate-100 px-10 py-4 text-sm font-semibold text-slate-900 transition hover:bg-slate-200 dark:border-slate-700/80 dark:bg-slate-900/80 dark:text-slate-100 dark:hover:bg-slate-800"
            >
              Testar chat IA
            </Link>
          </div>
        </section>
      </div>
    </main>
  )
}
