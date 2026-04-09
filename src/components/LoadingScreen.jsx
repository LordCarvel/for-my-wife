function LoadingScreen({ name }) {
  return (
    <div className="loading-screen" role="status" aria-live="polite">
      <div className="loading-card">
        <div className="loading-heart" aria-hidden="true">
          ♥
        </div>
        <span className="loading-kicker">Preparando a surpresa</span>
        <h2>Tudo ficando bonito para você, {name}</h2>
        <p>
          Organizando cada detalhe com carinho, brilho suave e um pouquinho de
          suspense romântico.
        </p>
        <div className="loading-bar" aria-hidden="true">
          <span />
        </div>
      </div>
    </div>
  )
}

export default LoadingScreen
