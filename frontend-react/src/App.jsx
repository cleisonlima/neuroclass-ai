import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'

function App() {
  return (
    <div style={{
      background: '#0f172a',
      minHeight: '100vh',
      color: 'white'
    }}>
      <Navbar />
      <Dashboard />
    </div>
  )
}

export default App
