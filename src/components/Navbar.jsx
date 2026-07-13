import { Link } from 'react-router-dom'

// URL de la landing — hermana del demo dentro del sitio (dist/index.html).
// 'index.html' funciona local (doble clic) y en producción (Vercel sirve / e /index.html).
const LANDING_URL = 'index.html'

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        <img src="logo.svg" alt="COOP" style={{ height: '21.56px', width: 'auto' }} />
      </Link>
      <a href={LANDING_URL} className="navbar-back" aria-label="Volver a la landing">
        <span aria-hidden="true">←</span> Volver a la landing
      </a>
    </nav>
  )
}
