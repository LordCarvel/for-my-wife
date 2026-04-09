import { useState } from 'react'
import LoveCounter from './LoveCounter'
import SectionHeading from './SectionHeading'

function MemoryImage({ memory }) {
  const [src, setSrc] = useState(memory.image)

  const handleError = () => {
    if (!memory.fallbackImage || src === memory.fallbackImage) {
      return
    }

    setSrc(memory.fallbackImage)
  }

  return <img src={src} alt={memory.alt} loading="lazy" onError={handleError} />
}

function MemoriesSection({ memories, relationshipStart }) {
  return (
    <div className="section-panel memories-layout">
      <div className="memories-top">
        <SectionHeading
          eyebrow={memories.eyebrow}
          title={memories.title}
          description={memories.description}
        />

        <LoveCounter
          relationshipStart={relationshipStart}
          title={memories.counterTitle}
          description={memories.counterDescription}
        />
      </div>

      <div className="memories-grid">
        {memories.items.map((memory) => (
          <article className="memory-card" key={memory.title} data-reveal>
            <div className="memory-card__image">
              <MemoryImage memory={memory} />
            </div>

            <div className="memory-card__content">
              <h3>{memory.title}</h3>
              <p>{memory.description}</p>
            </div>
          </article>
        ))}
      </div>

      {memories.extraMoments?.length ? (
        <div className="memories-text-list" data-reveal>
          <h3>{memories.extraMomentsTitle}</h3>
          {memories.extraMoments.map((moment) => (
            <article className="memories-text-item" key={moment.date}>
              <span className="memory-card__date">{moment.date}</span>
              <p>{moment.text}</p>
            </article>
          ))}
        </div>
      ) : null}
    </div>
  )
}

export default MemoriesSection
