'use client'

import './globals.css'
import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'

export default function RootLayout({ children }) {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('neuroclass-theme')
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    setTheme(savedTheme || (systemPrefersDark ? 'dark' : 'light'))
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark-theme', theme === 'dark')
    window.localStorage.setItem('neuroclass-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))
  }

  return (
    <html lang="pt-BR">
      <body className="app-shell">
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        {children}
      </body>
    </html>
  )
}
