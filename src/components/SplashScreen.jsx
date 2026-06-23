import { useState, useEffect } from 'react'

/* Intro de logo que se reproduce al abrir el demo.
   Dura ~2s (animación) y luego hace fade-out y se desmonta. */
export default function SplashScreen() {
  const [hide, setHide] = useState(false)     // dispara el fade-out
  const [done, setDone] = useState(false)     // desmonta del DOM

  useEffect(() => {
    const t1 = setTimeout(() => setHide(true), 2000)   // 2s de animación
    const t2 = setTimeout(() => setDone(true), 2450)   // + fade de 0.45s
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  if (done) return null

  return (
    <div className={`splash${hide ? ' splash--hide' : ''}`} aria-hidden="true">
      <img src="/logo.svg" alt="" className="splash-logo" />
    </div>
  )
}
