import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getRestaurant } from "../../store/restaurants";
import "./RestaurantShow.css"

const RestaurantShow = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const restaurant = useSelector(state => state.restaurants[id]);

  useEffect(() => {
    dispatch(getRestaurant(id))
  }, [dispatch, id])

  return (
    <>
    <div className="show-img-container">

    </div>
    <div className="show-rest-left-container">

    {restaurant && (<ul>
      <li>{restaurant.name}</li>
      <li>{restaurant.phoneNumber}</li>
      <li>{restaurant.address}</li>
      <li>{restaurant.cuisine}</li>
      <li>{restaurant.description}</li>
    </ul>)}
    </div>
    <div className="show-rest-right-container">
    </div>
    </>
  )
}

export default RestaurantShow;