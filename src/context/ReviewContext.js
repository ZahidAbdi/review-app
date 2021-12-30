import { v4 as uuidv4 } from 'uuid';
import { createContext, useState } from 'react';

const ReviewContext = createContext();

export const ReviewProvider = ({ children }) => {
  const [review, setReview] = useState([
    {
      id: 1,
      text: 'This is review item 1',
      rating: 10,
    },
    {
      id: 2,
      text: 'This is review item 2',
      rating: 8,
    },
    {
      id: 3,
      text: 'This is review item 3',
      rating: 3,
    },
  ]);

  const [reviewEdit, setReviewEdit] = useState({
    item: {},
    edit: false,
  });

  //  Add Review
  const addReview = newReview => {
    newReview.id = uuidv4();
    setReview([newReview, ...review]);
  };

  // Delete the Review
  const deleteReview = id => {
    if (window.confirm('Are you sure you want to delete?')) {
      setReview(review.filter(item => item.id !== id));
    }
  };

  //  Update Review item
  const updateReview = (id, updItem) => {
    setReview(
      review.map(item => (item.id === id ? { ...item, ...updItem } : item))
    );
  };

  // Set item to be updated
  const editReview = item => {
    setReviewEdit({
      item,
      edit: true,
    });
  };

  return (
    <ReviewContext.Provider
      value={{
        review: review,
        reviewEdit: reviewEdit,
        deleteReview: deleteReview,
        addReview: addReview,
        editReview: editReview,
        updateReview: updateReview,
      }}
    >
      {children}
    </ReviewContext.Provider>
  );
};

export default ReviewContext;
