import { Link } from 'react-router-dom'

// URL de la landing — cambiar por la URL de producción al desplegar
const LANDING_URL = '/'

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        <img src="/logo.svg" alt="COOP by Platzi" style={{ height: '21.56px', width: 'auto' }} />
      </Link>
      <a href={LANDING_URL} className="navbar-back" aria-label="Volver a la landing">
        <span aria-hidden="true">←</span> Volver a la landing
      </a>
    </nav>
  )
}
