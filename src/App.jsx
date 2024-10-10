import { useEffect, useState } from 'react'
// eslint-disable-next-line no-unused-vars
import reactLogo from './assets/react.svg'
// eslint-disable-next-line no-unused-vars
import viteLogo from '/vite.svg'
import './App.css'

import Feedback from './components/feedback'
import Options from './components/Options'
import Notification from './components/Notification';

function App() {

  const [feedback, setFeedback] = useState(() => {
    const saveFeedback = localStorage.getItem('save-feedback')
    return saveFeedback ? JSON.parse(saveFeedback) : {
    good: 0,
    neutral: 0,
    bad: 0,
  }
  })

  const updateFeedback = (feedbackType) => {
    setFeedback({ ...feedback, [feedbackType]: feedback[feedbackType] + 1 })
  }

  const totalFeedback = feedback.good + feedback.bad + feedback.neutral

  const reset = () => { setFeedback({ good: 0, neutral: 0, bad: 0 }), localStorage.removeItem('save-feedback')}
  
  useEffect(() => {
    window.localStorage.setItem("save-feedback", JSON.stringify(feedback))
  }, [feedback])

  return (
    <>
      <h1>Sip Happens Café</h1>
      <p>Please leave your feedback about our service by selecting one of the options below.</p>
      <Options updateFeedback={updateFeedback}
                 totalFeedback={totalFeedback}
                                 reset={reset} />
      { totalFeedback > 0 ? (<Feedback feedback={feedback} totalFeedback={totalFeedback} />) :  ( <Notification message="No feedback given yet" /> )}
    </>
  )
}

export default App
