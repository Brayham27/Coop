import { useNavigate } from 'react-router-dom'

export default function HeroCard({ item }) {
  const navigate = useNavigate()

  return (
    <section
      className="hero"
      style={{ backgroundImage: "url('/thumbnails/hero-main.jpg')" }}
    >
      <div className="hero-content">
        <div className="hero-badges">
          <span className="badge">{item.category}</span>
          <span className="badge badge-neutral">{item.year}</span>
          <span className="badge badge-neutral">{item.duration}</span>
        </div>
        <h1 className="hero-title">{item.title}</h1>
        <p className="hero-description">{item.description}</p>
        <div className="hero-actions">
          <button
            className="btn btn-primary btn-lg"
            onClick={() => navigate(`/detail/${item.id}`)}
          >
            ▶ Ver ahora
          </button>
          <button className="btn btn-secondary btn-lg">＋ Mi lista</button>
        </div>
      </div>
    </section>
  )
}
