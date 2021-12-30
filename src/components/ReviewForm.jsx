import { useState, useContext, useEffect } from "react"
import RatingSelect from "./RatingSelect"
import Card from "./shared/Card"
import Button from "./shared/Button"
import ReviewContext from "../context/ReviewContext"


function ReviewForm() {
  const [text, setText] = useState('')
  const [rating, setRating] = useState('10')
  const [btnDisabled, setBtnDisabled] = useState('true')
  const [message, setMessage] = useState('')

  const {addReview, reviewEdit, updateReview} = useContext(ReviewContext)

  useEffect(() => {
    if(reviewEdit.edit === true) {
      setBtnDisabled(false)
      setText(reviewEdit.item.text)
      setRating(reviewEdit.item.rating)
    }
  }, [reviewEdit]) 

  const handleTextChange = (e) => {
    if(text === '') {
      setBtnDisabled(true)
      setMessage(null)
    } else if (text !== '' && text.trim().length <= 10) {
      setMessage('Text must be at least 10 characters')
      setBtnDisabled(true)
    } else {
      setMessage(null)
      setBtnDisabled(false)
    }

    setText(e.target.value);

  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    if(text.trim().length > 10) {
      const newReview = {
        text: text, 
        rating: rating,
      }

      if(reviewEdit.edit === true) {
        updateReview(reviewEdit.item.id, newReview)
      } else {
        addReview(newReview)
      }
      // clear text
      setText('')
    }
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input 
            onChange={handleTextChange} 
            type="text" placeholder="Write a review" 
            value={text} />
          <Button type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>


        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  )
}

export default ReviewForm
