import "./RestaurantSearchItem.css"
import { Link } from "react-router-dom"

const RestaurantSearchItem = ({ restaurant }) => {
  const { address, cuisine, description, name, phoneNumber, reviews} = restaurant;
  
  const calculateAvgRating = () => {
    let totalRating = 0;
    reviews.forEach(review => {
      totalRating += review.rating;
    })
    let avgRating = totalRating/reviews.length
    return avgRating;
  }
  const avgRating = calculateAvgRating();

  return ( 

          <div className="restaurant-item">
            <div className="restaurant-item-left">
              <img src={restaurant.photoUrl}/>
            </div>
            <div className="restaurant-item-right">
              <a href={`/restaurants/${restaurant.id}`}><h3 className="search-item-name">{name}</h3></a>
              <div className="search-star-container">
                <i className={`fa-sharp fa-solid fa-star search-star ${Math.round(avgRating) >= 1 ? "search-active-star" : ""}`}></i>
                <i className={`fa-sharp fa-solid fa-star search-star ${Math.round(avgRating) >= 2 ? "search-active-star" : ""}`}></i>
                <i className={`fa-sharp fa-solid fa-star search-star ${Math.round(avgRating) >= 3 ? "search-active-star" : ""}`}></i>
                <i className={`fa-sharp fa-solid fa-star search-star ${Math.round(avgRating) >= 4 ? "search-active-star" : ""}`}></i>
                <i className={`fa-sharp fa-solid fa-star search-star ${Math.round(avgRating) >= 5 ? "search-active-star" : ""}`}></i>
              </div>
              <p className="phone-number">{`(${phoneNumber.slice(0,3)})-${phoneNumber.slice(3,6)}-${phoneNumber.slice(6)}`}</p>
              <p className="search-cuisine">{cuisine}</p>
              <p>{address}</p>
            </div>
          </div>
  )
}

export default RestaurantSearchItem;