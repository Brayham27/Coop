import { useNavigate } from 'react-router-dom'

export default function VideoCard({ item }) {
  const navigate = useNavigate()

  return (
    <div className="video-card" onClick={() => navigate(`/detail/${item.id}`)}>
      <div className="video-card-thumb">
        <img src={item.thumbnail} alt={item.title} loading="lazy" />
        <div className="video-card-overlay">
          <button className="video-card-play" aria-label={`Reproducir ${item.title}`}>
            ▶
          </button>
        </div>
      </div>
      <p className="video-card-name">{item.title}</p>
    </div>
  )
}
