import { useState, useEffect } from 'react'

export default function MobileWarning() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const isMobile = window.matchMedia('(max-width: 768px)').matches
    if (isMobile) setVisible(true)
  }, [])

  if (!visible) return null

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 9999,
      background: 'rgba(0,0,0,0.85)',
      backdropFilter: 'blur(8px)',
      display: 'flex', alignItems: 'flex-end',
      padding: '0',
    }}>
      <div style={{
        width: '100%',
        background: 'var(--platzi-surface)',
        borderTop: '1px solid var(--platzi-border2)',
        borderRadius: '20px 20px 0 0',
        padding: '32px 24px 40px',
        display: 'flex', flexDirection: 'column', gap: '16px',
      }}>
        <div style={{ fontSize: '2rem', textAlign: 'center' }}>🖥️</div>

        <h2 style={{
          fontFamily: 'var(--font-sans)',
          color: 'var(--text-primary)',
          fontSize: '1.2rem',
          fontWeight: 700,
          textAlign: 'center',
          lineHeight: 1.3,
        }}>
          Esta experiencia funciona mejor en pantallas más grandes
        </h2>

        <p style={{
          fontFamily: 'var(--font-sans)',
          color: 'var(--text-muted)',
          fontSize: '0.9rem',
          textAlign: 'center',
          lineHeight: 1.6,
        }}>
          El demo simula una interfaz de escritorio. En móvil algunas funciones pueden no comportarse como se espera.
        </p>

        <button
          onClick={() => setVisible(false)}
          style={{
            marginTop: '8px',
            padding: '14px',
            borderRadius: 'var(--radius-full)',
            background: 'var(--platzi-green)',
            color: '#0B0B0B',
            fontFamily: 'var(--font-sans)',
            fontWeight: 700,
            fontSize: '0.9rem',
            border: 'none',
            cursor: 'pointer',
            width: '100%',
          }}
        >
          Entendido, continuar igual
        </button>
      </div>
    </div>
  )
}
