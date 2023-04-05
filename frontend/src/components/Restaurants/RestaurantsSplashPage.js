import { useEffect } from "react";
import RestaurantSplashItem from "./RestaurantSplashItem"
import "./RestaurantsSplashPage.css"
import { useDispatch, useSelector } from "react-redux"
import { getRestaurants } from "../../store/restaurants";

const RestaurantsSplashPage = () => {
  const dispatch = useDispatch();
  const restaurants = useSelector(state => Object.values(state.restaurants))

  useEffect(() => {
    dispatch(getRestaurants())
  }, [dispatch])

  return (
    <div className="restaurant-scroller-container">
      <div className="restaurant-scroller">
        {restaurants.map(restaurant => (
          <RestaurantSplashItem key={restaurant.id} restaurant={restaurant}/>
        ))}
      </div>
    </div>
  )
}

export default RestaurantsSplashPage;