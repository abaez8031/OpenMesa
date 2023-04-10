import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getRestaurant } from "../../store/restaurants";
import "./RestaurantShow.css"
import bill from "../../assets/icons8-money-bill-32.png"
import cutlery from "../../assets/icons8-cutlery-100.png"
import { deleteReview, fetchReviews } from "../../store/reviews";
import CreateReviewForm from "../Reviews/CreateReviewForm";

const RestaurantShow = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const restaurant = useSelector(state => state.restaurants[id]);
  const reviews = useSelector(state => Object.values(state.reviews));
  const COLORS = ["aquamarine", "coral", "chartreuse", "fuchsia"]
  const currentUser = useSelector(state => state.session.user);

  useEffect(() => {
    dispatch(getRestaurant(id));
    dispatch(fetchReviews(id));
  }, [dispatch, id])

  return (
    <>
    <div className="show-img-container">
      <img src="https://www.travelandleisure.com/thmb/Jw-KKDrA6z1nvDJbr5kyKJSG4vk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/TAL-header-oiji-mi-NEWNYCDINE0223-8c392080598d44dbafdbc87bbcf4d7dd.jpg"></img>
    </div>

    <div className="show-rest-left-container">
      <div className="show-rest-info-container">
        <ol className="show-rest-info-tabs">
          <li>Overview</li>
          <li>Experiences</li>
          <li>Offers</li>
          <li>Popular dishes</li>
          <li>Photos</li>
          <li>Menu</li>
          <li>Reviews</li>
        </ol>
      {restaurant && (
        <>
        <h3 className="show-rest-name">{restaurant.name}</h3>
          <div className="rest-overview-header">

            <div className="show-star-container">
              <i className="fa-sharp fa-solid fa-star active-star"></i>
              <i className="fa-sharp fa-solid fa-star active-star"></i>
              <i className="fa-sharp fa-solid fa-star active-star"></i>
              <i className="fa-sharp fa-solid fa-star active-star"></i>
              <i className="fa-sharp fa-solid fa-star active-star"></i>
              <span>5.0</span>
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
              <i className="fa-sharp fa-solid fa-star active-star"></i>
              <i className="fa-sharp fa-solid fa-star active-star"></i>
              <i className="fa-sharp fa-solid fa-star active-star"></i>
              <i className="fa-sharp fa-solid fa-star active-star"></i>
              <i className="fa-sharp fa-solid fa-star active-star"></i>
              <span>Dined {Math.trunc(Math.random() * 365 + 1)} days ago</span>
            </div>
            <div className="review-body">
              <h3>{review.body}</h3>
            </div>
            {currentUser && review.userId === currentUser.id && (
              <button className="delete-review-btn" onClick={() => {
                dispatch(deleteReview(review.id))
              }}>Delete Review</button>
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
    </div>
    </>
  )

}

export default RestaurantShow;