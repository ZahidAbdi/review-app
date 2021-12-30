import {motion, AnimatePresence} from 'framer-motion'
import { useContext } from 'react'
import FeedbackItems from "./FeedbackItems"
import ReviewContext from '../context/ReviewContext'

function ReviewList() {
  const {review} = useContext(ReviewContext)

  if(!review || review.length === 0) {
    return <p>No Reviews Yet!</p>
  }
  return (
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