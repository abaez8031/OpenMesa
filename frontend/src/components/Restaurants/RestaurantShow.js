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
    <div className="show-rest-info-container">
    <ol className="show-rest-info-tabs">
      <li className="show-rest-info-tab">Overview</li>
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
        <div className="rating-info"> * * * * * 5.0</div>
        <div>Reviews</div>
        <div>{restaurant.cuisine}</div>
      </div>
      </>
    )}

    {restaurant && (<ul>
      <li>{restaurant.name}</li>
      <li>{restaurant.phoneNumber}</li>
      <li>{restaurant.address}</li>
      <li>{restaurant.cuisine}</li>
      <li>{restaurant.description}</li>
    </ul>)}
    </div>
    </div>

    <div className="show-rest-right-container">
    </div>
    </>
  )
}

export default RestaurantShow;