import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getItemById } from '../data/mockData.js'

export default function DetailView() {
  const { id } = useParams()
  const navigate = useNavigate()
  const item = getItemById(id)
  const [showMobileWarning, setShowMobileWarning] = useState(false)

  const handlePlay = () => {
    const isMobile = window.matchMedia('(max-width: 768px)').matches
    if (isMobile) {
      setShowMobileWarning(true)
    } else {
      navigate(`/player/${item.id}`)
    }
  }

  if (!item) {
    return (
      <div className="detail-notfound">
        <p style={{ color: 'var(--text-muted)' }}>Contenido no encontrado.</p>
        <button className="btn btn-secondary btn-lg" onClick={() => navigate('/')}>
          Volver al inicio
        </button>
      </div>
    )
  }

  return (
    <div className="detail">
      {showMobileWarning && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 9999,
          background: 'rgba(0,0,0,0.85)',
          backdropFilter: 'blur(8px)',
          display: 'flex', alignItems: 'flex-end',
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
              fontFamily: 'var(--font-sans)', color: 'var(--text-primary)',
              fontSize: '1.2rem', fontWeight: 700, textAlign: 'center', lineHeight: 1.3,
            }}>
              Esta experiencia funciona mejor en pantallas más grandes
            </h2>
            <p style={{
              fontFamily: 'var(--font-sans)', color: 'var(--text-muted)',
              fontSize: '0.9rem', textAlign: 'center', lineHeight: 1.6,
            }}>
              El reproductor simula una interfaz de escritorio. En móvil algunas funciones pueden no comportarse como se espera.
            </p>
            <button
              onClick={() => { setShowMobileWarning(false); navigate(`/player/${item.id}`) }}
              style={{
                marginTop: '8px', padding: '14px', borderRadius: 'var(--radius-full)',
                background: 'var(--platzi-green)', color: '#0B0B0B',
                fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: '0.9rem',
                border: 'none', cursor: 'pointer', width: '100%',
              }}
            >
              Entendido, continuar igual
            </button>
            <button
              onClick={() => setShowMobileWarning(false)}
              style={{
                padding: '12px', borderRadius: 'var(--radius-full)',
                background: 'transparent', color: 'var(--text-muted)',
                fontFamily: 'var(--font-sans)', fontWeight: 500, fontSize: '0.85rem',
                border: '1px solid var(--platzi-border2)', cursor: 'pointer', width: '100%',
              }}
            >
              Volver
            </button>
          </div>
        </div>
      )}

      <button
        className="btn btn-secondary btn-sm detail-back"
        onClick={() => navigate('/')}
      >
        ← Volver
      </button>

      <section
        className="detail-hero"
        style={{ backgroundImage: `url(${item.thumbnail})` }}
      >
        <div className="detail-hero-content">
          <p className="detail-eyebrow-meta">
            {item.category} · {item.year} · {item.duration}
          </p>
          <h1 className="detail-title">{item.title}</h1>
          <p className="detail-director">Dir. {item.director}</p>
          <div className="detail-hero-actions">
            <button
              className="btn btn-primary btn-lg"
              onClick={handlePlay}
            >
              ▶ Ver ahora
            </button>
          </div>
        </div>
      </section>

      <section className="detail-body">
        <div className="detail-synopsis">
          <p className="detail-eyebrow">Sinopsis</p>
          <p className="detail-description">{item.description}</p>
        </div>

        <hr className="detail-divider" />

        <div className="detail-learn">
          <p className="detail-eyebrow">Qué vas a aprender</p>
          <p className="detail-learn-subtitle">
            Mientras ves esta película COOP detectará estos conceptos y te los
            explicará en contexto, justo cuando aparecen en pantalla.
          </p>
          <p className="detail-learn-text">{item.whatYouLearn}</p>
        </div>
      </section>
    </div>
  )
}
