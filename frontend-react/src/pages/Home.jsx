import { Link } from 'react-router-dom'

function Home() {
  return (
    <main className="home-shell">
      <section className="home-hero">
        <div>
          <span className="eyebrow">Bem-vindo ao NeuroClass AI</span>
          <h1>Inteligência acadêmica para gestão de aprendizagem.</h1>
          <p>Transforme dados de desempenho em estratégias práticas. Monitoramento de risco, recomendações personalizadas e cadastro de alunos em um único lugar.</p>
          <div className="home-actions">
            <Link className="primary-button" to="/dashboard">Começar agora</Link>
            <Link className="secondary-button" to="/dashboard">Ver dashboard</Link>
            <Link className="secondary-button" to="/chat">Abrir chat</Link>
          </div>
        </div>

        <div className="home-banner">
          <div className="hero-card banner-card">
            <span className="card-label">Insights automáticos</span>
            <h2>Identifique alunos em risco e direcione ações eficazes.</h2>
          </div>
          <div className="hero-card banner-card">
            <span className="card-label">Recomendações práticas</span>
            <h2>Crie planos de estudo personalizados e aumente a retenção.</h2>
          </div>
        </div>
      </section>

      <section className="feature-grid">
        <article className="feature-card">
          <h3>Mapa de desempenho</h3>
          <p>Veja rapidamente quais cursos e alunos precisam de atenção com uma visualização clara.</p>
        </article>
        <article className="feature-card">
          <h3>Cadastro rápido</h3>
          <p>Adicione novos alunos com características de progresso, carga horária e engajamento.</p>
        </article>
        <article className="feature-card">
          <h3>Chat inteligente</h3>
          <p>Converse com o assistente para descobrir risco, recomendações e ações orientadas.</p>
        </article>
      </section>
    </main>
  )
}

export default Home
