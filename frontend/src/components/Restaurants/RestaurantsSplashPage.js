import { useEffect } from "react";
import RestaurantSplashItem from "./RestaurantSplashItem"
import "./RestaurantsSplashPage.css"
import { useDispatch, useSelector } from "react-redux"
import { getRestaurants } from "../../store/restaurants";

const RestaurantsSplashPage = () => {
  const dispatch = useDispatch();
  const restaurants = useSelector(state => Object.values(state.restaurants))
  const colombianRestaurants = restaurants.filter(restaurant => restaurant.cuisine === "Colombian").sort(() => 0.5 - Math.random()).slice(0, 8)
  const mexicanRestaurants = restaurants.filter(restaurant => restaurant.cuisine === "Mexican").sort(() => 0.5 - Math.random()).slice(0, 8)
  const dominicanRestaurants = restaurants.filter(restaurant => restaurant.cuisine === "Dominican").sort(() => 0.5 - Math.random()).slice(0, 8)
  const brazilianRestaurants = restaurants.filter(restaurant => restaurant.cuisine === "Brazilian").sort(() => 0.5 - Math.random()).slice(0, 8)
  const venezuelanRestaurants = restaurants.filter(restaurant => restaurant.cuisine === "Venezuelan").sort(() => 0.5 - Math.random()).slice(0, 8)
  
  useEffect(() => {
    dispatch(getRestaurants());
    const scrollLeftBtn = document.querySelector(".scroll-left-btn")
    const scrollRightBtn = document.querySelector(".scroll-right-btn")
    const scroller = document.querySelector(".restaurant-scroller")
    const scrollLeft = (e) => {
      scroller.scrollLeft -= 300
    }
    const scrollRight = (e) => {
      scroller.scrollLeft += 300
    }
    scrollLeftBtn.addEventListener("click",scrollLeft);
    scrollRightBtn.addEventListener("click",scrollRight);
  }, [dispatch])

  return (
    <div className="splash-page-content">
      <div className="splash-header">
        <h3>Colombian Restaurants</h3>
      </div>

      <div className="restaurant-scroller-container">
        <button className="scroll-left-btn">	&lt;</button>
        <div className="restaurant-scroller">
          {colombianRestaurants.map(restaurant => (
            <RestaurantSplashItem key={restaurant.id} restaurant={restaurant}/>
          ))}
        </div>
        <button className="scroll-right-btn">&gt;</button>
      </div>

      <div className="splash-header">
        <h3>Mexican Restaurants</h3>
      </div>
      <div className="restaurant-scroller-container">
        <button className="scroll-left-btn">&lt;</button>
        <div className="restaurant-scroller">
          {mexicanRestaurants.map(restaurant => (
            <RestaurantSplashItem key={restaurant.id} restaurant={restaurant}/>
          ))}
        </div>
        <button className="scroll-right-btn">&gt;</button>
      </div>
      
      <div className="splash-header">
        <h3>Dominican Restaurants</h3>
      </div>
      <div className="restaurant-scroller-container">
        <button className="scroll-left-btn">	&lt;</button>
        <div className="restaurant-scroller">
          {dominicanRestaurants.map(restaurant => (
            <RestaurantSplashItem key={restaurant.id} restaurant={restaurant}/>
          ))}
        </div>
        <button className="scroll-right-btn">&gt;</button>
      </div>

      <div className="splash-header">
        <h3>Brazilian Restaurants</h3>
      </div>
      <div className="restaurant-scroller-container">
        <button className="scroll-left-btn">	&lt;</button>
        <div className="restaurant-scroller">
          {brazilianRestaurants.map(restaurant => (
            <RestaurantSplashItem key={restaurant.id} restaurant={restaurant}/>
          ))}
        </div>
        <button className="scroll-right-btn">&gt;</button>
      </div>

      <div className="splash-header">
        <h3>Venezuelan Restaurants</h3>
      </div>
      <div className="restaurant-scroller-container">
        <button className="scroll-left-btn">	&lt;</button>
        <div className="restaurant-scroller">
          {venezuelanRestaurants.map(restaurant => (
            <RestaurantSplashItem key={restaurant.id} restaurant={restaurant}/>
          ))}
        </div>
        <button className="scroll-right-btn">&gt;</button>
      </div>
    </div>
  )
}

export default RestaurantsSplashPage;