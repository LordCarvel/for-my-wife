const hearts = [
  {
    left: '5%',
    size: '1rem',
    duration: '18s',
    delay: '0s',
    drift: '1rem',
    opacity: '0.28',
  },
  {
    left: '13%',
    size: '1.3rem',
    duration: '22s',
    delay: '5s',
    drift: '-1.8rem',
    opacity: '0.34',
  },
  {
    left: '22%',
    size: '0.9rem',
    duration: '20s',
    delay: '2s',
    drift: '1.6rem',
    opacity: '0.2',
  },
  {
    left: '36%',
    size: '1.15rem',
    duration: '24s',
    delay: '7s',
    drift: '-1.2rem',
    opacity: '0.24',
  },
  {
    left: '49%',
    size: '1.45rem',
    duration: '19s',
    delay: '3s',
    drift: '1.8rem',
    opacity: '0.22',
  },
  {
    left: '61%',
    size: '0.95rem',
    duration: '25s',
    delay: '11s',
    drift: '-1.4rem',
    opacity: '0.26',
  },
  {
    left: '74%',
    size: '1.2rem',
    duration: '23s',
    delay: '6s',
    drift: '1.4rem',
    opacity: '0.32',
  },
  {
    left: '88%',
    size: '1.05rem',
    duration: '21s',
    delay: '9s',
    drift: '-1.5rem',
    opacity: '0.25',
  },
]

function FloatingHearts() {
  return (
    <div className="floating-hearts" aria-hidden="true">
      {hearts.map((heart) => (
        <span
          className="floating-heart"
          key={`${heart.left}-${heart.delay}`}
          style={{
            '--left': heart.left,
            '--size': heart.size,
            '--duration': heart.duration,
            '--delay': heart.delay,
            '--drift': heart.drift,
            '--opacity': heart.opacity,
          }}
        >
          ♥
        </span>
      ))}
    </div>
  )
}

export default FloatingHearts
