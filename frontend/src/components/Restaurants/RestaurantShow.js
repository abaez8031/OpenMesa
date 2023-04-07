import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getRestaurant } from "../../store/restaurants";
import "./RestaurantShow.css"
import bill from "../../assets/icons8-money-bill-32.png"
import cutlery from "../../assets/icons8-cutlery-100.png"
import { fetchReviews } from "../../store/reviews";
import CreateReviewForm from "../Reviews/CreateReviewForm";

const RestaurantShow = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const restaurant = useSelector(state => state.restaurants[id]);
  const reviews = useSelector(state => Object.values(state.reviews));

  useEffect(() => {
    dispatch(getRestaurant(id));
    dispatch(fetchReviews(id))
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
              <i className="fa-sharp fa-solid fa-star"></i>
              <i className="fa-sharp fa-solid fa-star"></i>
              <i className="fa-sharp fa-solid fa-star"></i>
              <i className="fa-sharp fa-solid fa-star"></i>
              <i className="fa-sharp fa-solid fa-star"></i>
              <span>5.0</span>
            </div>

            <div className="show-reviews-container">
            <i class="fa-regular fa-message fa-flip-horizontal"></i>
              <span>{Math.trunc(Math.random() * 1000 + 1)} Reviews</span>
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
      </div>
    </div>

    <div className="show-rest-right-container">
    </div>
    </>
  )

}

export default RestaurantShow;