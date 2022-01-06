import { createContext, useState, useEffect } from 'react';

const ReviewContext = createContext();

export const ReviewProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [review, setReview] = useState([]);
  const [reviewEdit, setReviewEdit] = useState({
    item: {},
    edit: false,
  });

  useEffect(() => {
    fetchReview();
  }, []);

  // Fetch Review data
  const fetchReview = async () => {
    const response = await fetch('/review?_sort=id&_order_desc');
    const data = await response.json();

    setReview(data);
    setIsLoading(false);
  };

  //  Add Review
  const addReview = async newReview => {
    const response = await fetch('/review', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(newReview),
    });

    const data = await response.json();

    setReview([data, ...review]);
  };

  // Delete the Review
  const deleteReview = async id => {
    if (window.confirm('Are you sure you want to delete?')) {
      await fetch(`/review/${id}`, { method: 'DELETE' });

      setReview(review.filter(item => item.id !== id));
    }
  };

  //  Update Review item
  const updateReview = async (id, updItem) => {
    const response = await fetch(`/review/${id}`, {
      method: 'PUt',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(updItem),
    });
    const data = await response.json();

    setReview(
      review.map(item => (item.id === id ? { ...item, ...data } : item))
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
        isLoading: isLoading,
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
