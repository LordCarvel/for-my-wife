import { useEffect, useRef, useState } from 'react'
import SectionHeading from './SectionHeading'

function EmotionalSection({ emotional }) {
  const sectionRef = useRef(null)
  const [isActive, setIsActive] = useState(false)
  const [visibleCount, setVisibleCount] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]

        if (!entry?.isIntersecting) {
          return
        }

        setIsActive(true)
        setVisibleCount(1)
        observer.disconnect()
      },
      {
        threshold: 0.35,
      },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isActive) {
      return undefined
    }

    const timer = window.setInterval(() => {
      setVisibleCount((currentCount) => {
        if (currentCount >= emotional.phrases.length) {
          window.clearInterval(timer)
          return currentCount
        }

        return currentCount + 1
      })
    }, emotional.intervalMs)

    return () => window.clearInterval(timer)
  }, [emotional.intervalMs, emotional.phrases.length, isActive])

  return (
    <div className="emotional-panel" ref={sectionRef}>
      <SectionHeading
        eyebrow={emotional.eyebrow}
        title={emotional.title}
        description={emotional.description}
        align="center"
      />

      <div className="emotional-lines">
        {emotional.phrases.map((phrase, index) => (
          <p
            className={`emotional-line ${index < visibleCount ? 'is-active' : ''}`}
            key={phrase}
          >
            {phrase}
          </p>
        ))}
      </div>

      <p
        className={`emotional-bridge ${
          visibleCount >= emotional.phrases.length ? 'is-active' : ''
        }`}
      >
        {emotional.closingLine}
      </p>
    </div>
  )
}

export default EmotionalSection
