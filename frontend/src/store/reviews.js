import csrfFetch from "./csrf";

const RECEIVE_REVIEW = "reviews/receiveReview";
const RECEIVE_REVIEWS = "reviews/receiveReviews";
const REMOVE_REVIEW = "reviews/removeReview"

const receiveReview = (review) => ({
  type: RECEIVE_REVIEW,
  review
})

const receiveReviews = (reviews) => ({
  type: RECEIVE_REVIEWS,
  reviews
})

const removeReview = (reviewId) => ({
  type: REMOVE_REVIEW,
  reviewId
})

export const getReview = (reviewId) => state => {
  if (state.reviews) {
    return state.reviews[reviewId]
  }
  else {
    return null
  }
}

export const getReviews = (state) => {
  if (state.reviews) {
    return Object.values(state.reviews)
  }
  else {
    return []
  }
}

export const fetchReviews = (restaurantId) => async dispatch => {
  const res = await csrfFetch(`/api/restaurants/${restaurantId}/reviews`)
  if (res.ok) {
    const data = await res.json();
    dispatch(receiveReviews(data))
    return res;
  }
}

export const fetchReview = (restaurantId, reviewId) => async dispatch => {
  const res = await csrfFetch(`/api/restaurants/${restaurantId}/reviews/${reviewId}`)
  if (res.ok) {
    const data = await res.json();
    dispatch(receiveReview(data))
    return res;
  }
}

export const createReview = (restaurantId,review) => async dispatch => {
  const res = await csrfFetch(`/api/restaurants/${restaurantId}/reviews`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(review)
  })
  if (res.ok) {
    const data = await res.json();
    dispatch(receiveReview(data))
  }
  return res;
}

export const updateReview = (restaurantId,review) => async dispatch => {
  const res = await csrfFetch(`/api/restaurants/${restaurantId}/reviews/${review.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(review)
  })
  if (res.ok) {
    const data = await res.json();
    dispatch(receiveReview(data))
  }
}

export const deleteReview = (restaurantId,reviewId) => async dispatch => {
  const res = await csrfFetch(`/api/restaurants/${restaurantId}/reviews/${reviewId}`,
  {method: "DELETE"
})
if (res.ok) {
  dispatch(removeReview(reviewId))
}
}

const reviewsReducer = (initialState = {}, action) => {
  switch (action.type) {
    case RECEIVE_REVIEW:
      return {...initialState, [action.review.id]: action.review}
    case RECEIVE_REVIEWS:
      return {...initialState, ...action.reviews}
    case REMOVE_REVIEW:
      const newState = {...initialState}
      delete newState[action.reviewId]
      return newState;
    default:
      return initialState
  }
}

export default reviewsReducer;