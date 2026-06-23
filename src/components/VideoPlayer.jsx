import { useCallback, useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getItemById } from '../data/mockData.js'

function formatTime(seconds) {
  if (!Number.isFinite(seconds)) return '00:00'
  const m = Math.floor(seconds / 60)
  const s = Math.floor(seconds % 60)
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
}

export default function VideoPlayer() {
  const { id } = useParams()
  const navigate = useNavigate()
  const item = getItemById(id)

  // Estructura unificada: Interstellar usa learningTabs (tabs por materia);
  // el resto del catálogo aún usa notes plano → se normaliza a una sola tab.
  const learningTabs =
    item?.learningTabs ??
    (item?.notes ? [{ id: 'default', label: 'Notas', icon: '📝', notes: item.notes }] : [])

  const videoRef = useRef(null)
  const playerRef = useRef(null)
  const progressRef = useRef(null)
  const hideTimerRef = useRef(null)
  const draggingRef = useRef(false)

  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(1)
  const [controlsVisible, setControlsVisible] = useState(true)
  const [activeNote, setActiveNote] = useState(null)
  const [activeTab, setActiveTab] = useState(learningTabs[0]?.id ?? null)
  const [lastSeen, setLastSeen] = useState({})

  const showControls = useCallback(() => {
    setControlsVisible(true)
    clearTimeout(hideTimerRef.current)
    hideTimerRef.current = setTimeout(() => setControlsVisible(false), 3000)
  }, [])

  useEffect(() => {
    showControls()
    return () => clearTimeout(hideTimerRef.current)
  }, [showControls])

  // Intentar bloquear la orientación a landscape en móvil (requiere
  // fullscreen en la mayoría de browsers).
  useEffect(() => {
    const lockOrientation = async () => {
      try {
        if (screen.orientation && screen.orientation.lock) {
          await screen.orientation.lock('landscape')
        }
      } catch (err) {
        console.log('Orientation lock no soportado o requiere fullscreen primero')
      }
    }
    lockOrientation()

    return () => {
      if (screen.orientation && screen.orientation.unlock) {
        screen.orientation.unlock()
      }
    }
  }, [])

  const togglePlay = () => {
    const video = videoRef.current
    if (!video) return
    if (video.paused) {
      video.play()
    } else {
      video.pause()
    }
  }

  const seekFromEvent = (e) => {
    const video = videoRef.current
    const track = progressRef.current
    if (!video || !track || !video.duration) return
    const rect = track.getBoundingClientRect()
    const ratio = Math.min(Math.max((e.clientX - rect.left) / rect.width, 0), 1)
    video.currentTime = ratio * video.duration
    setCurrentTime(video.currentTime)
  }

  const onProgressPointerDown = (e) => {
    draggingRef.current = true
    e.currentTarget.setPointerCapture(e.pointerId)
    seekFromEvent(e)
  }

  const onProgressPointerMove = (e) => {
    if (draggingRef.current) seekFromEvent(e)
  }

  const onProgressPointerUp = () => {
    draggingRef.current = false
  }

  const onVolumeChange = (e) => {
    const value = Number(e.target.value)
    setVolume(value)
    if (videoRef.current) {
      videoRef.current.volume = value
      // el autoplay arranca muteado; usar el slider quita el mute
      videoRef.current.muted = value === 0
    }
  }

  const toggleFullscreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen()
    } else {
      playerRef.current?.requestFullscreen()
    }
  }

  // Resuelve la nota de un tab para un instante dado y la muestra.
  const resolveNote = (tabId, t) => {
    const tabNotes = learningTabs.find((tb) => tb.id === tabId)?.notes ?? []
    const note =
      tabNotes.find((n) => n.triggerTime.from <= t && t <= n.triggerTime.to) ?? null
    setActiveNote(note)
    if (note) setLastSeen((prev) => ({ ...prev, [tabId]: note.concept }))
  }

  // Cambiar de tab: si el video está pausado, actualiza la card al instante
  // con la nota del nuevo tab para el mismo timestamp.
  const handleTabChange = (tabId) => {
    setActiveTab(tabId)
    const video = videoRef.current
    if (video && video.paused) resolveNote(tabId, video.currentTime)
  }

  if (!item) {
    return (
      <div className="player" style={{ alignItems: 'center', justifyContent: 'center' }}>
        <p style={{ color: 'var(--text-muted)' }}>Contenido no encontrado.</p>
        <button className="btn btn-secondary btn-lg" onClick={() => navigate('/')}>
          Volver al inicio
        </button>
      </div>
    )
  }

  const activeNotes = learningTabs.find((tb) => tb.id === activeTab)?.notes ?? []
  const progress = duration ? (currentTime / duration) * 100 : 0
  const hiddenClass = controlsVisible ? '' : ' controls-hidden'

  return (
    <div
      ref={playerRef}
      className={`player${controlsVisible ? '' : ' hide-cursor'}`}
      onMouseMove={showControls}
    >
      <div className={`player-top${hiddenClass}`}>
        <button className="player-close" onClick={() => navigate('/')} aria-label="Volver al inicio">
          ✕
        </button>
        <div>
          <div className="player-title">{item.title}</div>
          <div className="player-meta">
            {item.category} · {item.year} · {item.duration} · Dir. {item.director}
          </div>
        </div>
      </div>

      <div className="player-stage">
        <div className="player-video-wrap">
          <video
            ref={videoRef}
            src={item.videoUrl}
            style={{ transform: item.rotate180 ? 'rotate(180deg)' : 'none' }}
            autoPlay
            muted
            onClick={togglePlay}
            onPlay={() => {
              setIsPlaying(true)
              setActiveNote(null)
            }}
            onPause={() => {
              setIsPlaying(false)
              resolveNote(activeTab, videoRef.current?.currentTime ?? 0)
            }}
            onSeeked={(e) => {
              // Si el usuario hace seek mientras está pausado, recalcular la
              // nota para el nuevo timestamp dentro del tab activo.
              if (e.target.paused) resolveNote(activeTab, e.target.currentTime)
            }}
            onTimeUpdate={(e) => setCurrentTime(e.target.currentTime)}
            onLoadedMetadata={(e) => setDuration(e.target.duration)}
          />
          {activeNote && (
            <div className="coop-overlay-demo">
              <div className="note-header">
                <span className="note-eyebrow">{activeNote.eyebrow}</span>
                <button
                  className="note-close"
                  onClick={() => setActiveNote(null)}
                  aria-label="Descartar nota"
                >
                  ✕
                </button>
              </div>
              <h3 className="note-concept">{activeNote.concept}</h3>
              <p className="note-description">{activeNote.description}</p>
              <div className="note-tags">
                {activeNote.tags.map((tag) => (
                  <span key={tag} className="badge-teal">{tag}</span>
                ))}
              </div>
              <button
                className="note-cta"
                onClick={() => window.open(activeNote.platziUrl || '#', '_blank')}
              >
                Guardar en Platzi →
              </button>
            </div>
          )}
        </div>
      </div>

      <div className={`player-controls${hiddenClass}`}>
        <div
          ref={progressRef}
          className="progress-track"
          onPointerDown={onProgressPointerDown}
          onPointerMove={onProgressPointerMove}
          onPointerUp={onProgressPointerUp}
        >
          <div className="progress-fill" style={{ width: `${progress}%` }} />
          {activeNotes.map((note) => (
            <div
              key={note.id}
              className="note-marker"
              style={{ left: `${(note.triggerTime.from / (duration || 47)) * 100}%` }}
            >
              <span className="note-marker-tooltip">{note.concept}</span>
            </div>
          ))}
          <div className="progress-thumb" style={{ left: `${progress}%` }} />
        </div>

        <div className="controls-bar">
          <button
            className="ctrl-btn ctrl-btn-play"
            onClick={togglePlay}
            aria-label={isPlaying ? 'Pausar' : 'Reproducir'}
          >
            {isPlaying ? '❚❚' : '▶'}
          </button>
          <span className="ctrl-time">
            {formatTime(currentTime)} / {formatTime(duration)}
          </span>
          <div className="ctrl-spacer" />
          <div className="volume-group">
            <span className="ctrl-time">{volume === 0 ? '🔇' : '🔊'}</span>
            <input
              className="volume-slider"
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={volume}
              onChange={onVolumeChange}
              aria-label="Volumen"
            />
          </div>
          <button className="ctrl-btn" onClick={toggleFullscreen} aria-label="Pantalla completa">
            ⛶
          </button>
        </div>
      </div>

      {learningTabs.length > 1 && (
        <div
          style={{
            display: 'flex',
            gap: 'var(--space-3)',
            justifyContent: 'space-between',
            maxWidth: '960px',
            width: '100%',
            margin: '0 auto',
            padding: '0 var(--space-8) var(--space-8)',
          }}
        >
          {learningTabs.map((tab) => {
            const isActive = tab.id === activeTab
            return (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                style={{
                  flex: 1,
                  minWidth: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 'var(--space-1)',
                  padding: 'var(--space-4)',
                  borderRadius: 'var(--radius-lg)',
                  background: isActive ? 'var(--platzi-green-bg)' : 'var(--platzi-surface)',
                  border: isActive
                    ? '1px solid rgba(15,195,112,0.3)'
                    : '1px solid var(--platzi-border)',
                  color: 'var(--text-primary)',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                  textAlign: 'center',
                }}
              >
                <span style={{ fontSize: '1.5rem', lineHeight: 1 }}>{tab.icon}</span>
                <span style={{ fontWeight: 600, fontSize: '0.9rem' }}>{tab.label}</span>
                <span
                  style={{
                    display: 'block',
                    width: '100%',
                    fontSize: '0.7rem',
                    color: 'var(--text-muted)',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {lastSeen[tab.id] || 'Sin explorar'}
                </span>
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}
