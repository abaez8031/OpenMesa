import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { getRestaurant } from "../../store/restaurants";
import "./RestaurantShow.css"
import bill from "../../assets/icons8-money-bill-32.png"
import cutlery from "../../assets/icons8-cutlery-100.png"
import trash from "../../assets/icons8-trash-can-64.png"
import { deleteReview, fetchReviews, getReviews } from "../../store/reviews";
import CreateReviewForm from "../Reviews/CreateReviewForm";
import ReservationForm from "../Reservations/ReservationForm";

const RestaurantShow = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const restaurant = useSelector(state => state.restaurants[id]);
  const reviews = useSelector(getReviews);
  const COLORS = ["aquamarine", "coral", "chartreuse", "fuchsia"]
  const currentUser = useSelector(state => state.session.user);
  const calculateAvgRating = () => {
    let totalRating = 0;
    reviews.forEach(review => {
      totalRating += review.rating;
    })
    return totalRating/reviews.length
  }
  const avgRating = calculateAvgRating()
  
  useEffect(() => {
    dispatch(getRestaurant(id));
    dispatch(fetchReviews(id));
  }, [dispatch, id])

  return (
    <>
    <div className="show-img-container">
      <img src={restaurant?.photoUrl}></img>
    </div>

    <div className="show-rest-left-container">
      <div className="show-rest-info-container">
      {restaurant && (
        <>
        <h3 className="show-rest-name">{restaurant.name}</h3>
          <div className="rest-overview-header">

            <div className="show-star-container">
              <i className={`fa-sharp fa-solid fa-star ${Math.round(avgRating) >= 1 ? "active-star" : ""}`}></i>
              <i className={`fa-sharp fa-solid fa-star ${Math.round(avgRating) >= 2 ? "active-star" : ""}`}></i>
              <i className={`fa-sharp fa-solid fa-star ${Math.round(avgRating) >= 3 ? "active-star" : ""}`}></i>
              <i className={`fa-sharp fa-solid fa-star ${Math.round(avgRating) >= 4 ? "active-star" : ""}`}></i>
              <i className={`fa-sharp fa-solid fa-star ${Math.round(avgRating) >= 5 ? "active-star" : ""}`}></i>
              <span>{avgRating.toString()}</span>
            </div>

            <div className="show-reviews-container">
            <i className="fa-regular fa-message fa-flip-horizontal"></i>
              <span>{reviews.length} Reviews</span>
            </div>
            <div className="show-price-container">
              <img className="show-price-bill" src={bill}></img>
              <span>${Math.trunc(Math.random() * 5 + 1) * 10} and over</span>
            </div>

            <div className="show-cuisine-container">
              <img className="show-cuisine-cutlery" src={cutlery}></img>
              <span>{restaurant.cuisine}</span>
            </div>
          
        </div>
        </>
      )}
        {restaurant && (<span className="rest-show-description">{restaurant.description}</span>)}
      <div className="reviews-header">
        <h2>What {reviews.length} people are saying</h2>
      </div>
      
      <ol className="show-rest-reviews">
      {reviews.map(review => (

        <li key={review.id}className="show-rest-review">

          <div className="review-left">
            <div style={{backgroundColor: COLORS[`${Math.floor(Math.random() * COLORS.length)}`]}}className="review-avatar">
              <span>{review.user.first_name.slice(0,1)}{review.user.last_name.slice(0,1)}
              </span>
            </div>
            <div className="review-user-info">
              <h3>{review.user.first_name}</h3>
              <h3>{review.user.primary_dining_location}</h3>
            </div>
          </div>

          <div className="review-right">
            <div className="review-stars">
              <i className={`fa-sharp fa-solid fa-star ${review.rating >= 1 ? "active-star" : ""}`}></i>
              <i className={`fa-sharp fa-solid fa-star ${review.rating >= 2 ? "active-star" : ""}`}></i>
              <i className={`fa-sharp fa-solid fa-star ${review.rating >= 3 ? "active-star" : ""}`}></i>
              <i className={`fa-sharp fa-solid fa-star ${review.rating >= 4 ? "active-star" : ""}`}></i>
              <i className={`fa-sharp fa-solid fa-star ${review.rating >= 5 ? "active-star" : ""}`}></i>
              <span>Dined {Math.trunc(Math.random() * 365 + 1)} days ago</span>
            </div>
            <div className="review-body">
              <h3>{review.body}</h3>
            </div>
            {currentUser && review.userId === currentUser.id && (
              <div className="review-delete-edit-btns">
                <button className="delete-review-btn" onClick={() => {
                  dispatch(deleteReview(review.id))
                }}><img className="delete-btn-icon" src={trash}/></button>
                <Link to={`/reviews/${review.id}/edit`}>
                  <button className="edit-review-btn">
                  <i className="fa-regular fa-pen-to-square"></i>
                  </button>
                </Link>
              </div>
            )}
          </div>
        </li>
      ))}
      </ol>

    {currentUser && !reviews.some(review => review.userId === currentUser.id) &&
        (<CreateReviewForm/>)
    }
    </div>
      </div>


    <div className="show-rest-right-container">
      {currentUser && (<ReservationForm/>)}
    </div>
    </>
  )

}

export default RestaurantShow;