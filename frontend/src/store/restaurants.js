import csrfFetch from "./csrf";

const RECEIVE_RESTAURANT = "restaurants/receiveRestaurant"
const RECEIVE_RESTAURANTS = "restaurants/receiveRestaurants"


const receiveRestaurant = (restaurant) => ({
  type: RECEIVE_RESTAURANT,
  restaurant
})

const receiveRestaurants = (restaurants) => ({
  type: RECEIVE_RESTAURANTS,
  restaurants
})

export const getRestaurants = () => async dispatch => {
  const res = await csrfFetch("/api/restaurants")
  if (res.ok) {
    const data = await res.json();
    dispatch(receiveRestaurants(data));
    return res;
  }
}

export const getRestaurant = (restaurantId) => async dispatch => {
  const res = await csrfFetch(`/api/restaurants/${restaurantId}`);
  if (res.ok) {
    const data = await res.json();
    dispatch(receiveRestaurant(data));
    return res;
  }
}

const restaurantsReducer = (initialState = {}, action) => {
  switch (action.type) {
    case RECEIVE_RESTAURANT: 
      return {...initialState, [action.restaurant.id]: action.restaurant}
    case RECEIVE_RESTAURANTS:
      return {...initialState, ...action.restaurants}
    default:
      return initialState;
  }
}

export default restaurantsReducer;