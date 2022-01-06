import {motion, AnimatePresence} from 'framer-motion'
import { useContext } from 'react'
import FeedbackItems from "./FeedbackItems"
import Spinner from './shared/Spinner'
import ReviewContext from '../context/ReviewContext'

function ReviewList() {
  const {review, isLoading } = useContext(ReviewContext)


  // Check to see if theres no feedback
  if(!isLoading && (!review || review.length === 0)) {
    return <p>No Reviews Yet!</p>
  }

  return isLoading ? <Spinner /> : (
    <div className="feedback-list">
      <AnimatePresence>
        {review.map((item) => (
          <motion.div 
          key={item.id}
          initial={{ opacity:0 }}
          animate={{ opacity:1 }}
          exit={{ opacity:0 }}
          >
          <FeedbackItems 
          key={item.id} 
          item={item} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )

  // return without the animation
  // return (
  //   <div className="feedback-list">
  //     {review.map((item) => (
  //       <FeedbackItems key={item.id} item={item} handleDelete={handleDelete}/>
  //     ))}
  //   </div>
  // )
}

export default ReviewList