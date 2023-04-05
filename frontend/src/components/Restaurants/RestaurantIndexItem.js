import "./RestaurantIndexItem.css"

const RestaurantIndexItem = ({ restaurant }) => {
  console.log(restaurant)
  return (
    <div className="restaurant-index-list"> 
      <ul>
        <div className="restaurant-item">
        <li className="restaurant-text">{restaurant.name}</li>
        <li className="restaurant-text">Phone Number: {restaurant.phoneNumber}</li>
        <li className="restaurant-text">Address: {restaurant.address}</li>
        <li className="restaurant-text">Cuisine {restaurant.cuisine}</li>
        <li className="restaurant-text">Description: {restaurant.description}</li>
        </div>
      </ul>
    </div>
  )
}

export default RestaurantIndexItem;