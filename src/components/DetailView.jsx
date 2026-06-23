import { useNavigate, useParams } from 'react-router-dom'
import { getItemById } from '../data/mockData.js'

export default function DetailView() {
  const { id } = useParams()
  const navigate = useNavigate()
  const item = getItemById(id)

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
              onClick={() => navigate(`/player/${item.id}`)}
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
