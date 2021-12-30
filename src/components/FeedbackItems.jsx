import { FaTimes, FaEdit } from 'react-icons/fa'
import { useContext } from 'react'
import PropTypes from 'prop-types'
import Card from "./shared/Card"
import ReviewContext from '../context/ReviewContext'

function FeedbackItems({item}) {
  const {deleteReview, editReview} = useContext(ReviewContext)

  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => deleteReview(item.id)} className='close'>
        <FaTimes color='purple' />
      </button>
      <button onClick={() => editReview(item)} className='edit'>
        <FaEdit color='purple' />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  )
}

FeedbackItems.propTypes = {
  item: PropTypes.object.isRequired,

}

export default FeedbackItems