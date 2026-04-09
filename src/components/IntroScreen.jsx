import TypewriterText from './TypewriterText'

function formatDate(dateString) {
  return new Intl.DateTimeFormat('pt-BR', {
    day: 'numeric',
    month: 'long',
  }).format(new Date(dateString))
}

function IntroScreen({ intro, couple, onStart, hasStarted }) {
  return (
    <header className="hero-section">
      <section className="hero-card hero-card--main" data-reveal>
        <div className="hero-card__inner">
          <span className="hero-kicker">{intro.eyebrow}</span>
          <h1>{intro.title}</h1>
          <p className="hero-description">{intro.description}</p>
          <TypewriterText key={intro.typewriterText} text={intro.typewriterText} />

          <div className="hero-actions">
            <button
              className="primary-button"
              type="button"
              onClick={onStart}
              disabled={hasStarted}
            >
              {hasStarted ? intro.startedLabel : intro.startButtonLabel}
            </button>
            <p className="hero-note">{intro.smallNote}</p>
          </div>
        </div>
      </section>

      <aside className="hero-card hero-card--side" data-reveal>
        <div className="hero-side__inner">
          <span className="hero-kicker">{intro.sideBadge}</span>

          <div className="hero-highlight-list">
            {intro.highlights.map((item, index) => (
              <article className="hero-highlight-item" key={item.title}>
                <span className="hero-highlight-index">0{index + 1}</span>
                <div>
                  <h2>{item.title}</h2>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="hero-date-card">
            <span>{intro.sideDateLabel}</span>
            <strong>{formatDate(couple.datingAskDate)} | te pedi em namoro</strong>
            <strong>{formatDate(couple.birthdayDate)} | seu aniversário</strong>
            <p>{intro.sideDateText}</p>
          </div>

          <p className="hero-side__note">{intro.sideNote}</p>
        </div>
      </aside>
    </header>
  )
}

export default IntroScreen
