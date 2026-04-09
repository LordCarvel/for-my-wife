import { startTransition, useEffect, useRef, useState } from 'react'
import './App.css'
import EmotionalSection from './components/EmotionalSection'
import FinalLetter from './components/FinalLetter'
import FloatingHearts from './components/FloatingHearts'
import IntroScreen from './components/IntroScreen'
import LoadingScreen from './components/LoadingScreen'
import MemoriesSection from './components/MemoriesSection'
import MusicPlayer from './components/MusicPlayer'
import QuizGame from './components/QuizGame'
import SurpriseModal from './components/SurpriseModal'
import { siteContent } from './data/siteContent'

const LOADING_DURATION = 2200

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [hasStarted, setHasStarted] = useState(false)
  const [isSurpriseOpen, setIsSurpriseOpen] = useState(false)
  const journeyRef = useRef(null)

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), LOADING_DURATION)

    return () => window.clearTimeout(timer)
  }, [])

  useEffect(() => {
    const elements = document.querySelectorAll('[data-reveal]')

    if (!elements.length) {
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return
          }

          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        })
      },
      {
        threshold: 0.18,
        rootMargin: '0px 0px -6% 0px',
      },
    )

    elements.forEach((element) => {
      if (element.classList.contains('is-visible')) {
        return
      }

      observer.observe(element)
    })

    return () => observer.disconnect()
  }, [hasStarted])

  const handleStart = () => {
    startTransition(() => {
      setHasStarted(true)
    })

    window.setTimeout(() => {
      journeyRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }, 180)
  }

  return (
    <div className={`app-shell ${hasStarted ? 'app-shell--started' : ''}`}>
      <div className="app-aurora app-aurora--one" aria-hidden="true" />
      <div className="app-aurora app-aurora--two" aria-hidden="true" />
      <div className="app-aurora app-aurora--three" aria-hidden="true" />

      {isLoading ? (
        <LoadingScreen name={siteContent.couple.partnerName} />
      ) : null}

      <FloatingHearts />
      <MusicPlayer music={siteContent.music} />

      <IntroScreen
        intro={siteContent.intro}
        couple={siteContent.couple}
        onStart={handleStart}
        hasStarted={hasStarted}
      />

      <main
        ref={journeyRef}
        className={`journey ${hasStarted ? 'journey--visible' : ''}`}
      >
        <section className="content-section" id="quiz">
          <QuizGame quiz={siteContent.quiz} />
        </section>

        <section className="content-section" id="memories">
          <MemoriesSection
            memories={siteContent.memories}
            relationshipStart={siteContent.couple.relationshipStart}
          />
        </section>

        <section className="content-section" id="emotional">
          <EmotionalSection emotional={siteContent.emotional} />
        </section>

        <section className="content-section" id="final">
          <FinalLetter
            couple={siteContent.couple}
            finalLetter={siteContent.finalLetter}
            onOpenSurprise={() => setIsSurpriseOpen(true)}
          />
        </section>
      </main>

      <SurpriseModal
        surprise={siteContent.surprise}
        isOpen={isSurpriseOpen}
        onClose={() => setIsSurpriseOpen(false)}
      />
    </div>
  )
}

export default App
