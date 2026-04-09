import { useEffect, useRef, useState } from 'react'

function MusicPlayer({ music }) {
  const audioRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    const audio = audioRef.current

    if (!audio) {
      return undefined
    }

    const handlePlay = () => setIsPlaying(true)
    const handlePause = () => setIsPlaying(false)
    const handleError = () => setHasError(true)

    audio.addEventListener('play', handlePlay)
    audio.addEventListener('pause', handlePause)
    audio.addEventListener('error', handleError)

    return () => {
      audio.removeEventListener('play', handlePlay)
      audio.removeEventListener('pause', handlePause)
      audio.removeEventListener('error', handleError)
    }
  }, [])

  const handleToggle = async () => {
    const audio = audioRef.current

    if (!audio) {
      return
    }

    try {
      if (audio.paused) {
        await audio.play()
      } else {
        audio.pause()
      }
    } catch {
      setHasError(true)
    }
  }

  return (
    <div className={`music-player ${isExpanded ? 'music-player--expanded' : ''}`}>
      <audio ref={audioRef} loop preload="auto" src={music.src} />

      {isExpanded ? (
        <div className="music-player__panel">
          <div className="music-player__head">
            <div>
              <p className="music-player__label">{music.label}</p>
              <span className="music-player__status">
                {isPlaying ? 'Tocando agora' : 'Pronta para tocar'}
              </span>
            </div>

            <button
              className="music-player__minimize"
              type="button"
              aria-label="Recolher player da trilha"
              onClick={() => setIsExpanded(false)}
            >
              x
            </button>
          </div>

          <div className="music-player__row">
            <button
              className="music-player__toggle"
              type="button"
              onClick={handleToggle}
            >
              {isPlaying ? 'Pausar trilha' : 'Tocar trilha'}
            </button>
          </div>

          <p className="music-player__hint">
            {hasError ? music.fallbackMessage : music.caption}
          </p>
        </div>
      ) : null}

      <button
        className="music-player__launcher"
        type="button"
        aria-expanded={isExpanded}
        aria-label={isExpanded ? 'Fechar player da trilha' : 'Abrir player da trilha'}
        onClick={() => setIsExpanded((current) => !current)}
      >
        <span className={`music-player__pulse ${isPlaying ? 'is-playing' : ''}`} />
        <span>{isPlaying ? 'Trilha tocando' : 'Abrir trilha'}</span>
      </button>
    </div>
  )
}

export default MusicPlayer
