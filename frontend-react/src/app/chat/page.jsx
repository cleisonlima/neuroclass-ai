'use client'

import { useState } from 'react'
import axios from 'axios'

const aiUrl = process.env.NEXT_PUBLIC_AI_BASE_URL || 'http://localhost:8000'

export default function ChatPage() {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      text: 'Olá! Eu sou o assistente do NeuroClass. Pergunte sobre alunos, cursos, risco ou plano de estudo.',
    },
  ])
  const [input, setInput] = useState('')
  const [isSending, setIsSending] = useState(false)

  const handleSend = async (event) => {
    event.preventDefault()
    const trimmed = input.trim()
    if (!trimmed) return

    const nextMessages = [...messages, { role: 'user', text: trimmed }]
    setMessages(nextMessages)
    setInput('')
    setIsSending(true)

    try {
      const response = await axios.post(`${aiUrl}/chat`, { message: trimmed })
      setMessages((prev) => [...prev, { role: 'assistant', text: response.data.message }])
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          text: 'Desculpe, não foi possível conectar ao assistente agora. Tente novamente em alguns segundos.',
        },
      ])
    } finally {
      setIsSending(false)
    }
  }

  return (
    <main className="chat-shell">
      <section className="chat-panel">
        <div className="chat-header">
          <div>
            <span className="eyebrow">Chat inteligente</span>
            <h2>Converse em tempo real com o NeuroClass.</h2>
            <p>Use este espaço para tirar dúvidas, explorar riscos e descobrir recomendações personalizadas.</p>
          </div>
        </div>

        <div className="chat-window">
          {messages.map((message, index) => (
            <div key={index} className={`chat-bubble ${message.role}`}>
              <p>{message.text}</p>
            </div>
          ))}
        </div>

        <form className="chat-form" onSubmit={handleSend}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Escreva sua pergunta aqui..."
            aria-label="Mensagem para o assistente"
          />
          <button className="primary-button" type="submit" disabled={isSending}>
            {isSending ? 'Enviando...' : 'Enviar'}
          </button>
        </form>

        <div className="chat-help">
          <strong>Dicas rápidas:</strong>
          <p>"Quem está em risco?", "Qual curso está mais forte?", "Me ajude com um plano de estudo".</p>
        </div>
      </section>
    </main>
  )
}
