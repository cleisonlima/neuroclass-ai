import { useEffect, useState } from 'react'
import axios from 'axios'

function Dashboard() {
  const [students, setStudents] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8080/students')
      .then(response => setStudents(response.data))
      .catch(() => console.log('API offline'))
  }, [])

  return (
    <div style={{ padding: 40 }}>
      <h2>Painel Inteligente</h2>

      {students.map(student => (
        <div key={student.id} style={{
          background: '#111827',
          padding: 20,
          borderRadius: 10,
          marginTop: 10
        }}>
          <h3>{student.name}</h3>
          <p>{student.course}</p>
        </div>
      ))}
    </div>
  )
}

export default Dashboard
