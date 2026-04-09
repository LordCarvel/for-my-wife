import { useEffect } from 'react'

function SurpriseModal({ surprise, isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) {
      return undefined
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  if (!isOpen) {
    return null
  }

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal-card"
        role="dialog"
        aria-modal="true"
        aria-labelledby="surprise-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          className="modal-close"
          type="button"
          aria-label="Fechar surpresa"
          onClick={onClose}
        >
          ×
        </button>

        <span className="modal-kicker">{surprise.kicker}</span>
        <h2 id="surprise-title">{surprise.title}</h2>

        {surprise.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}

        <footer>
          <span>{surprise.signatureLabel}</span>
          <strong>{surprise.signature}</strong>
        </footer>
      </div>
    </div>
  )
}

export default SurpriseModal
