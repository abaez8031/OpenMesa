import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createReview } from "../../store/reviews";
import { useParams } from "react-router-dom";
import "./CreateReviewForm.css"

const CreateReviewForm = () => {
  const dispatch = useDispatch()
  const {id} = useParams();
  const [rating, setRating] = useState(0);
  const [body, setBody] = useState("")
  const sessionUser = useSelector(state => state.session.user)
  const reviewStars = document.querySelectorAll(".review-form-star");


  const handleSubmit = (e) => {
    e.preventDefault();
    const review = {
      userId: sessionUser.id,
      restaurantId: id,
      rating,
      body
    }
    dispatch(createReview(id, review))
    setRating(0);
    setBody("")
    reviewStars.forEach(star => {
        star.classList.remove("active-star")
    })
  }

  const handleStarClick = (e) => {
    const value = e.target.dataset.value
    setRating(value)
    reviewStars.forEach(star => {
      if (star.dataset.value <= value) {
        star.classList.add("active-star")
      }
      else {
        star.classList.remove("active-star")
      }
    })
  }

  return (
    <div className="review-form-container">
      <div className="review-form-header">
        <h3>Leave A Review</h3>
      </div>
      <form onSubmit={handleSubmit}
      className="review-form">
        <div className="review-form-body">
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
            rows={5}
            maxLength={1000}
            className="review-textarea"
          />
        </div>

      <div className="review-form-stars">

      <span onClick={handleStarClick}><i className="fa-sharp fa-solid fa-star review-form-star" data-value={1}></i></span>

      <span onClick={handleStarClick}><i className="fa-sharp fa-solid fa-star review-form-star" data-value={2}></i></span>

      <span onClick={handleStarClick}><i className="fa-sharp fa-solid fa-star review-form-star" data-value={3}></i></span>

      <span onClick={handleStarClick}><i className="fa-sharp fa-solid fa-star review-form-star" data-value={4}></i></span>

      <span onClick={handleStarClick}><i className="fa-sharp fa-solid fa-star review-form-star" data-value={5}></i></span>

      </div>
        <button type="submit">Create Review</button>
      </form>
    </div>
  )
}

export default CreateReviewForm;