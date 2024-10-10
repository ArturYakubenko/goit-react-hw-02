/* eslint-disable react/prop-types */

const Feedback = ({ feedback, totalFeedback }) => {
    return (
        <ul>
            <li>Good: {feedback.good}</li>
            <li>Neutral: {feedback.neutral} </li>
            <li>Bad: {feedback.bad}</li>
            <li>Total: {totalFeedback}</li>
            <li>Positivs: {Math.round(((feedback.good + feedback.neutral)/ totalFeedback) * 100)}%</li>
        </ul>
    )
    
}

export default Feedback