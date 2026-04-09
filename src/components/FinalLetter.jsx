function formatDate(dateString) {
  return new Intl.DateTimeFormat('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(dateString))
}

const particles = [
  { left: '8%', size: '1rem', duration: '16s', delay: '0s' },
  { left: '19%', size: '1.2rem', duration: '20s', delay: '4s' },
  { left: '32%', size: '0.95rem', duration: '17s', delay: '7s' },
  { left: '48%', size: '1.35rem', duration: '19s', delay: '2s' },
  { left: '63%', size: '1rem', duration: '21s', delay: '9s' },
  { left: '81%', size: '1.18rem', duration: '18s', delay: '5s' },
]

function FinalLetter({ couple, finalLetter, onOpenSurprise }) {
  return (
    <div className="final-letter">
      <div className="final-letter__particles" aria-hidden="true">
        {particles.map((particle) => (
          <span
            key={`${particle.left}-${particle.delay}`}
            style={{
              '--left': particle.left,
              '--size': particle.size,
              '--duration': particle.duration,
              '--delay': particle.delay,
            }}
          >
            ♥
          </span>
        ))}
      </div>

      <header className="final-letter__header" data-reveal>
        <span className="final-letter__badge">{finalLetter.badge}</span>
        <h2>{finalLetter.title}</h2>
        <p>{finalLetter.subtitle}</p>
      </header>

      <div className="final-letter__content">
        <aside className="final-letter__meta">
          {finalLetter.metaCards.map((card) => (
            <article className="final-letter__meta-card" key={card.label} data-reveal>
              <span className="final-letter__meta-label">{card.label}</span>
              <strong>{card.value}</strong>
              <p>{card.description}</p>
            </article>
          ))}

          <article className="final-letter__meta-card" data-reveal>
            <span className="final-letter__meta-label">Datas especiais</span>
            <strong>{formatDate(couple.birthdayDate)}</strong>
            <p>Aniversário da Emily.</p>
            <strong>{formatDate(couple.datingAskDate)}</strong>
            <p>Dia em que eu te pedi em namoro.</p>
          </article>
        </aside>

        <article className="final-letter__paper" data-reveal>
          <h3>{finalLetter.letterTitle}</h3>
          {finalLetter.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}

          <footer>
            <span>Com todo o meu amor,</span>
            <strong>{couple.authorName}</strong>
          </footer>
        </article>
      </div>

      <div className="final-letter__cta" data-reveal>
        <button className="secondary-button" type="button" onClick={onOpenSurprise}>
          {finalLetter.buttonText}
        </button>
        <p>{finalLetter.buttonCaption}</p>
      </div>
    </div>
  )
}

export default FinalLetter
