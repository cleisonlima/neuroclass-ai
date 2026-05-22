import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <header className="navbar">
      <div className="brand-group">
        <div className="brand-badge">🧠</div>
        <div>
          <h1>NeuroClass AI</h1>
          <p>Plataforma inteligente de governança acadêmica.</p>
        </div>
      </div>

      <nav className="nav-links">
        <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Início</NavLink>
        <NavLink to="/dashboard" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Dashboard</NavLink>
      </nav>

      <div className="nav-actions">
        <NavLink to="/chat" className="nav-action">Abrir chat</NavLink>
        <NavLink to="/dashboard" className="nav-action secondary">Ver dashboard</NavLink>
      </div>
    </header>
  )
}

export default Navbar
