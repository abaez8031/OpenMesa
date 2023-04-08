import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createReview } from "../../store/reviews";
import { useParams } from "react-router-dom";
import "./CreateReviewForm.css"

const CreateReviewForm = () => {
  const dispatch = useDispatch()
  const {restaurantId} = useParams();
  const [rating, setRating] = useState(0);
  const [body, setBody] = useState("")
  const sessionUser = useSelector(state => state.session.user)
  const reviewStars = document.querySelectorAll(".review-form-star")

  const handleSubmit = (e) => {
    e.preventDefault();
    const review = {
      userId: sessionUser.id,
      restaurantId,
      rating,
      body
    }
    dispatch(createReview(restaurantId, review))
  }

  return (
    <div className="review-form-container">
      <form onSubmit={handleSubmit}
      className="review-form">
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
          rows={5}
          maxLength={1000}
          className="review-textarea"
        />
      <div>

      <span data-value="1"><i className="fa-sharp fa-solid fa-star review-form-star"></i></span>

      <span data-value="2"><i className="fa-sharp fa-solid fa-star review-form-star"></i></span>

      <span data-value="3"><i className="fa-sharp fa-solid fa-star review-form-star"></i></span>

      <span data-value="4"><i className="fa-sharp fa-solid fa-star review-form-star"></i></span>

      <span data-value="5"><i className="fa-sharp fa-solid fa-star review-form-star"></i></span>

      </div>
        <button type="submit">Create Review</button>
      </form>
    </div>
  )
}

export default CreateReviewForm;