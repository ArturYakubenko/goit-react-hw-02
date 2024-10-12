import { useEffect, useState } from 'react'
// eslint-disable-next-line no-unused-vars
import reactLogo from './assets/react.svg'
// eslint-disable-next-line no-unused-vars
import viteLogo from '/vite.svg'
import './App.css'


import Feedback from './components/Feedback';
import Options from './components/Options';
import Notification from './components/Notification';
import Description from './components/Description';

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

  const reset = () => {
  setFeedback({ good: 0, neutral: 0, bad: 0 });
};

useEffect(() => {
  if (feedback.good === 0 && feedback.neutral === 0 && feedback.bad === 0) {
    localStorage.removeItem('save-feedback');
  } else {
    localStorage.setItem("save-feedback", JSON.stringify(feedback));
  }
}, [feedback]);
  
  const persent = Math.round((feedback.good/ totalFeedback) * 100)

  return (
    <>
      <Description/>
      <Options updateFeedback={updateFeedback}
                 totalFeedback={totalFeedback}
                                 reset={reset} />
      { totalFeedback > 0 ? (<Feedback feedback={feedback} totalFeedback={totalFeedback} persent={persent} />) :  ( <Notification message="No feedback given yet" /> )}
    </>
  )
}
//
export default App
