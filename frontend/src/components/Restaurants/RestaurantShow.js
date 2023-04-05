import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getRestaurant } from "../../store/restaurants";

const RestaurantShow = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  console.log(id)
  const restaurant = useSelector(state => state.restaurants[id]);
  console.log(restaurant)

  useEffect(() => {
    dispatch(getRestaurant(id))
  }, [dispatch, id])

  return (
    <>
    {restaurant && (<ul>
      <li>{restaurant.name}</li>
      <li>{restaurant.description}</li>
      <li>{restaurant.phoneNumber}</li>
    </ul>)}
    </>
  )
}

export default RestaurantShow;