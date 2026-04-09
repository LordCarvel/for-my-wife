import { useEffect, useState } from 'react'

function TypewriterText({ text, speed = 32 }) {
  const [visibleLength, setVisibleLength] = useState(0)

  useEffect(() => {
    const interval = window.setInterval(() => {
      setVisibleLength((currentLength) => {
        if (currentLength >= text.length) {
          window.clearInterval(interval)
          return currentLength
        }

        return currentLength + 1
      })
    }, speed)

    return () => window.clearInterval(interval)
  }, [speed, text])

  return (
    <p className="typewriter-line" aria-live="polite">
      <span>{text.slice(0, visibleLength)}</span>
      <span className="typewriter-cursor" aria-hidden="true">
        |
      </span>
    </p>
  )
}

export default TypewriterText
