'use client'

import { useEffect, useState } from 'react'
import axios from 'axios'

const aiUrl = process.env.NEXT_PUBLIC_AI_BASE_URL || 'http://localhost:8000'

export default function ChatPage() {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content:
        'Olá! Eu sou o assistente do NeuroClass. Pergunte sobre alunos, cursos, risco ou plano de estudo.',
    },
  ])
  const [input, setInput] = useState('')
  const [isSending, setIsSending] = useState(false)

  useEffect(() => {
    // scroll to bottom when messages change
    const el = document.getElementById('chat-window')
    if (el) el.scrollTop = el.scrollHeight
  }, [messages])

  const addMessage = (m) => setMessages((prev) => [...prev, m])

  const sendChat = async (e) => {
    if (e) e.preventDefault()
    const text = input.trim()
    if (!text) return
    addMessage({ role: 'user', content: text })
    setInput('')
    setIsSending(true)

    // optimistic typing bubble
    addMessage({ role: 'assistant', content: 'Pensando...' })

    try {
      const res = await axios.post(`${aiUrl}/chat`, { message: text })
      // remove last typing bubble
      setMessages((prev) => [...prev.slice(0, -1), { role: 'assistant', content: res.data.message }])
    } catch (err) {
      setMessages((prev) => [...prev.slice(0, -1), { role: 'assistant', content: 'Erro de conexão. Tente novamente.' }])
    } finally {
      setIsSending(false)
    }
  }

  const sendChip = (txt) => {
    setInput(txt)
    setTimeout(() => sendChat(), 50)
  }

  const onKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendChat()
    }
  }

  return (
    <main className="chat-wrap">
      <div className="chat-head">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.28em] text-violet-600 dark:text-violet-300">Chat inteligente</span>
          <h2 className="mt-2 text-2xl font-semibold text-slate-950 dark:text-white">Converse em tempo real com o NeuroClass.</h2>
          <p className="text-sm text-slate-600 dark:text-slate-300">Use este espaço para tirar dúvidas, explorar riscos e descobrir recomendações personalizadas.</p>
        </div>
      </div>

      <div className="chips" style={{ marginTop: 12 }}>
        <div className="chip" onClick={() => sendChip('Quais alunos estão em alto risco?')}>Alunos em risco</div>
        <div className="chip" onClick={() => sendChip('Qual é o curso mais popular?')}>Curso popular</div>
        <div className="chip" onClick={() => sendChip('Me dê dicas para reduzir a evasão escolar')}>Reduzir evasão</div>
        <div className="chip" onClick={() => sendChip('Como criar um plano de estudo eficaz?')}>Plano de estudo</div>
      </div>

      <div id="chat-window" className="chat-window">
        {messages.map((m, i) => (
          <div key={i} className={`bubble ${m.role}`}>
            <div className="bubble-label">{m.role === 'user' ? 'Você' : 'NeuroClass IA'}</div>
            <div dangerouslySetInnerHTML={{ __html: String(m.content).replace(/\n/g, '<br/>') }} />
          </div>
        ))}
      </div>

      <div className="chat-row">
        <textarea
          className="chat-input"
          rows={1}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={onKey}
          placeholder="Escreva sua pergunta aqui..."
        />
        <button className="chat-send" onClick={sendChat} disabled={isSending}>
          {isSending ? 'Enviando...' : 'Enviar →'}
        </button>
      </div>

      <div style={{ marginTop: 12 }} className="empty">
        <strong>Dicas rápidas:</strong>
        <p style={{ marginTop: 6 }}>'Quem está em risco?', 'Qual curso está mais forte?', 'Me ajude com um plano de estudo'.</p>
      </div>
    </main>
  )
}
