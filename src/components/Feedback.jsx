const Feedback = ({ feedback, totalFeedback, persent }) => {
    return (
        <ul>
            <li>Good: {feedback.good}</li>
            <li>Neutral: {feedback.neutral} </li>
            <li>Bad: {feedback.bad}</li>
            <li>Total: {totalFeedback}</li>
            <li>Positivs: {persent}%</li>
        </ul>
    )
    
}

export default Feedback