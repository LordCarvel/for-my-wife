import { useMemo, useState } from 'react'
import SectionHeading from './SectionHeading'

function QuizGame({ quiz }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedIndex, setSelectedIndex] = useState(null)
  const [answers, setAnswers] = useState([])

  const isFinished = currentIndex >= quiz.questions.length
  const currentQuestion = quiz.questions[currentIndex]
  const progress = isFinished
    ? 100
    : (((currentIndex + (selectedIndex !== null ? 1 : 0)) /
        quiz.questions.length) *
        100)

  const result = useMemo(() => {
    const total = answers.reduce((sum, answer) => sum + answer.points, 0)

    return (
      quiz.results.find((item) => total <= item.maxScore) ??
      quiz.results[quiz.results.length - 1]
    )
  }, [answers, quiz.results])

  const handleSelect = (optionIndex) => {
    if (selectedIndex !== null) {
      return
    }

    setSelectedIndex(optionIndex)
    setAnswers((previousAnswers) => [
      ...previousAnswers,
      currentQuestion.options[optionIndex],
    ])
  }

  const handleNext = () => {
    if (currentIndex === quiz.questions.length - 1) {
      setCurrentIndex(quiz.questions.length)
      setSelectedIndex(null)
      return
    }

    setCurrentIndex((previousIndex) => previousIndex + 1)
    setSelectedIndex(null)
  }

  return (
    <div className="quiz-card">
      <SectionHeading
        eyebrow={quiz.eyebrow}
        title={quiz.title}
        description={quiz.description}
      />

      <div className="quiz-progress" data-reveal>
        <div className="quiz-progress__top">
          <span>
            {isFinished
              ? 'Quiz encerrado'
              : `${quiz.questionCounterLabel} ${currentIndex + 1} de ${quiz.questions.length}`}
          </span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="quiz-progress__bar" aria-hidden="true">
          <span style={{ width: `${progress}%` }} />
        </div>
      </div>

      {isFinished ? (
        <div className="quiz-result" data-reveal>
          <span className="quiz-pill">Resultado especial</span>
          <h3>{result.title}</h3>
          <p>{result.text}</p>
          <p>{quiz.resultHint}</p>
        </div>
      ) : (
        <div className="quiz-panel" data-reveal>
          <span className="quiz-pill">{currentQuestion.tone}</span>
          <h3>{currentQuestion.question}</h3>

          <div className="quiz-options">
            {currentQuestion.options.map((option, optionIndex) => (
              <button
                className={`quiz-option ${selectedIndex === optionIndex ? 'is-selected' : ''}`}
                key={option.label}
                type="button"
                onClick={() => handleSelect(optionIndex)}
                disabled={selectedIndex !== null}
              >
                <span className="quiz-option__label">{option.label}</span>
              </button>
            ))}
          </div>

          {selectedIndex !== null ? (
            <div className="quiz-feedback">
              <div className="quiz-feedback__footer">
                <span>Resposta registrada.</span>

                <button className="quiz-action" type="button" onClick={handleNext}>
                  {currentIndex === quiz.questions.length - 1
                    ? quiz.finishButtonLabel
                    : quiz.nextButtonLabel}
                </button>
              </div>
            </div>
          ) : (
            <div className="quiz-feedback__footer">
              <span>{quiz.hint}</span>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default QuizGame
