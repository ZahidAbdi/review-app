
import { useContext } from 'react'
import ReviewContext from '../context/ReviewContext'

function ReviewStats() {
  const {review} = useContext(ReviewContext)

  // Calculate ratings avg
  let average = review.reduce((acc, cur) => {
    return acc + cur.rating 
  }, 0) / review.length

  average = average.toFixed(1).replace(/[.,]0$/, '') //Reg expression to remove if the decimal is a 0

  return (
    <div className="feedback-stats">
      <h4>{review.length} Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  )
}


export default ReviewStats
