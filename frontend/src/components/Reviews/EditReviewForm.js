import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchReview, getReview, updateReview } from "../../store/reviews";
import { useParams} from "react-router-dom";
import "./EditReviewForm.css"

const EditReviewForm = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [rating, setRating] = useState(0);
  const [body, setBody] = useState("")
  const reviewStars = document.querySelectorAll(".review-form-star");
  let review = useSelector(getReview(id));

  reviewStars.forEach(star => {
    if (star.dataset.value <= rating) {
      star.classList.add("active-star")
    }
    else {
      star.classList.remove("active-star")
    }
  })
  
  useEffect( () => {
    dispatch(fetchReview(id));
    setRating(review?.rating);
    setBody(review?.body)
  },[dispatch, id,review])

  const handleSubmit = (e) => {
    e.preventDefault();
    review = {
      ...review,
      rating,
      body
    }
    dispatch(updateReview(review))
    setRating(0);
    setBody("")
    reviewStars.forEach(star => {
        star.classList.remove("active-star")
    })
    window.location.replace(`/restaurants/${review.restaurantId}`);
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
    <div className="edit-review-form-container">
      <div className="edit-review-form-header">
        <h3>Update Review</h3>
      </div>
      <form onSubmit={handleSubmit}
      className="edit-review-form">
        <div className="edit-review-form-body">
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
            rows={5}
            maxLength={1000}
            className="edit-review-textarea"
          />
          <div className="review-form-body-info">
            <p className="length-of-body">{body?.length}/1000 characters</p>
          </div>
        </div>

      <div className="review-form-stars">

      <span onClick={handleStarClick}><i className="fa-sharp fa-solid fa-star review-form-star" data-value={1}></i></span>

      <span onClick={handleStarClick}><i className="fa-sharp fa-solid fa-star review-form-star" data-value={2}></i></span>

      <span onClick={handleStarClick}><i className="fa-sharp fa-solid fa-star review-form-star" data-value={3}></i></span>

      <span onClick={handleStarClick}><i className="fa-sharp fa-solid fa-star review-form-star" data-value={4}></i></span>

      <span onClick={handleStarClick}><i className="fa-sharp fa-solid fa-star review-form-star" data-value={5}></i></span>

      </div>
        <button type="submit">Update Review</button>
      </form>
    </div>
  )
}

export default EditReviewForm;