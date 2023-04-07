import { useEffect } from "react";
import RestaurantSplashItem from "./RestaurantSplashItem"
import "./RestaurantsSplashPage.css"
import { useDispatch, useSelector } from "react-redux"
import { getRestaurants } from "../../store/restaurants";

const RestaurantsSplashPage = () => {
  const dispatch = useDispatch();
  const restaurants = useSelector(state => Object.values(state.restaurants))
  const colombianRestaurants = restaurants.filter(restaurant => restaurant.cuisine === "Colombian").sort(() => 0.5 - Math.random()).slice(0, 5)
  const mexicanRestaurants = restaurants.filter(restaurant => restaurant.cuisine === "Mexican").sort(() => 0.5 - Math.random()).slice(0, 5)
  
  // console.log(mexicanRestaurants)
  // console.log(colombianRestaurants)
  

  useEffect(() => {
    dispatch(getRestaurants());
    const scrollLeftBtn = document.querySelector(".scroll-splash-left-btn")
    const scrollRightBtn = document.querySelector(".scroll-splash-right-btn")
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
    <div className="restaurant-scroller-container">
      <button className="scroll-splash-left-btn">Left</button>
      <div className="restaurant-scroller">
        {restaurants.map(restaurant => (
          <RestaurantSplashItem key={restaurant.id} restaurant={restaurant}/>
        ))}
      </div>
      <button className="scroll-splash-right-btn">Right</button>
    </div>
  )
}

export default RestaurantsSplashPage;