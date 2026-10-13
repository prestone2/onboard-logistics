import { quoteSteps } from '../../data/quote'
import type { FreightQuoteStep } from '../../types/forms'

export function QuoteProgress({ currentStep }: { currentStep: FreightQuoteStep }) {
  return (
    <div className="quote-progress-group" role="group" aria-label="Quote request progress">
      <ol className="quote-progress">{quoteSteps.map(({ step, label }) => {
        const isComplete = step < currentStep
        const isCurrent = step === currentStep
        return <li key={step} className={isCurrent ? 'is-current' : isComplete ? 'is-complete' : ''} aria-current={isCurrent ? 'step' : undefined}><span className="progress-number" aria-hidden="true">0{step}</span><span className="progress-label">{label}</span><span className="sr-only">{isComplete ? ', complete' : isCurrent ? ', current step' : ', not yet complete'}</span></li>
      })}</ol>
      <p className="quote-step-count">Step {currentStep} of {quoteSteps.length}</p>
    </div>
  )
}
