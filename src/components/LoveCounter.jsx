import { useEffect, useMemo, useState } from 'react'

function getElapsedParts(startDate) {
  const difference = Math.max(0, Date.now() - new Date(startDate).getTime())
  const totalSeconds = Math.floor(difference / 1000)

  const days = Math.floor(totalSeconds / 86400)
  const hours = Math.floor((totalSeconds % 86400) / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60

  return { days, hours, minutes, seconds }
}

function LoveCounter({ relationshipStart, title, description }) {
  const [parts, setParts] = useState(() => getElapsedParts(relationshipStart))

  useEffect(() => {
    const timer = window.setInterval(() => {
      setParts(getElapsedParts(relationshipStart))
    }, 1000)

    return () => window.clearInterval(timer)
  }, [relationshipStart])

  const formattedStart = useMemo(
    () =>
      new Intl.DateTimeFormat('pt-BR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      }).format(new Date(relationshipStart)),
    [relationshipStart],
  )

  const remainder = useMemo(
    () =>
      `${String(parts.hours).padStart(2, '0')}h ${String(parts.minutes).padStart(
        2,
        '0',
      )}min ${String(parts.seconds).padStart(2, '0')}s`,
    [parts.hours, parts.minutes, parts.seconds],
  )

  return (
    <aside className="counter-card" data-reveal>
      <span className="section-heading__eyebrow">{title}</span>
      <p className="counter-card__caption">{description}</p>
      <h3 className="counter-card__headline">
        <span className="counter-card__days">
          {String(parts.days).padStart(2, '0')}
        </span>
        <span className="counter-card__days-label">dias</span>
      </h3>
      <p className="counter-card__remainder">{remainder}</p>
      <p className="counter-card__since">Desde {formattedStart} até agora.</p>
    </aside>
  )
}

export default LoveCounter
