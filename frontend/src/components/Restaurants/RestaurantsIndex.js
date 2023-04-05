import { useEffect } from "react";
import { getRestaurants } from "../../store/restaurants"
import { useDispatch, useSelector } from "react-redux"
import RestaurantIndexItem from "./RestaurantIndexItem";

const RestaurantsIndex = () => {
  const dispatch = useDispatch();
  const restaurants = useSelector(state => Object.values(state.restaurants))

  useEffect(() => {
    dispatch(getRestaurants())
  }, [dispatch])

  return (restaurants.map(restaurant => (
    <RestaurantIndexItem restaurant={restaurant}/>
  )
  ))
}

export default RestaurantsIndex;