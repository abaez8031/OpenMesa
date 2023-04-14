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
      <a href={`/restaurants/${restaurant.id}`}>
          <div className="restaurant-item">
            <div className="restaurant-item-left">
              <img src="https://www.travelandleisure.com/thmb/Jw-KKDrA6z1nvDJbr5kyKJSG4vk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/TAL-header-oiji-mi-NEWNYCDINE0223-8c392080598d44dbafdbc87bbcf4d7dd.jpg"></img>
            </div>
            <div className="restaurant-item-right">
              <h3 className="search-item-name">{name}</h3>
            </div>
          </div>
        </a>
  )
}

export default RestaurantSearchItem;