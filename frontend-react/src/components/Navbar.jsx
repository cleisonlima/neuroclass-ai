import { NavLink } from 'react-router-dom'

function Navbar({ theme, toggleTheme }) {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl dark:border-slate-800/70 dark:bg-slate-950/80">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="grid h-12 w-12 place-items-center rounded-3xl bg-gradient-to-br from-violet-500 to-cyan-500 text-white shadow-glow">
            <span className="text-lg">🧠</span>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-violet-600 dark:text-violet-300">NeuroClass AI</p>
            <p className="text-sm text-slate-600 dark:text-slate-400">Plataforma inteligente de governança.</p>
          </div>
        </div>

        <nav className="ml-auto hidden items-center gap-8 md:flex">
          <NavLink to="/" className={({ isActive }) => isActive ? 'text-slate-950 font-semibold dark:text-white' : 'text-slate-500 transition hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'}>Início</NavLink>
          <NavLink to="/dashboard" className={({ isActive }) => isActive ? 'text-slate-950 font-semibold dark:text-white' : 'text-slate-500 transition hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'}>Dashboard</NavLink>
        </nav>

        <div className="flex flex-1 items-center justify-end gap-3">
          <button
            type="button"
            onClick={toggleTheme}
            className="btn-glass"
          >
            {theme === 'dark' ? 'Modo claro 🌤️' : 'Modo escuro 🌙'}
          </button>
          <NavLink to="/chat" className="rounded-full border border-violet-200 bg-white/90 px-4 py-2 text-sm font-semibold text-violet-700 transition hover:bg-violet-50 dark:border-slate-700/80 dark:bg-slate-900/80 dark:text-violet-300 dark:hover:bg-slate-800">
            Abrir chat
          </NavLink>
          <NavLink to="/dashboard" className="rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 px-4 py-2 text-sm font-semibold text-white shadow-glow transition hover:brightness-110">
            Ver dashboard
          </NavLink>
        </div>
      </div>
    </header>
  )
}

export default Navbar
