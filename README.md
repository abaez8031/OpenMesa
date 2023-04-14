# WELCOME TO OPENMESA

[Check out OpenMesa on Render!](https://openmesa.onrender.com/)

## Introduction

OpenMesa is a clone of the OpenTable website. OpenTable is an online restaurant reservation platform that allows users to find and book tables at restaurants. Users can search for restaurants by a number of filters. OpenTable also provides reviews and ratings to help users make informed decisions about where to eat. The technologies implemented in this project include:

Languages: Javascript, Ruby, HTML, and CSS
Frontend: React-Redux
Database: PostgreSQL
Hosting: Render

# MVPs

## Users

An OpenMesa user is able to create new profiles, which persist to both the frontend and backend.  Users can sign in or sign up in order to begin browsing. There is error handling & rendering when you try to sign in with incorrect credentials, or attempt to create a new user without the necessary information.

<img width="1437" alt="Screenshot 2023-04-14 at 3 14 47 PM" src="https://user-images.githubusercontent.com/113265748/232136558-bdfeb8fc-6cca-40fb-ae61-0b1bbfcbc126.png">

```js
return (
    <div className="signup-form-container">
      <form onSubmit={handleSubmit}>
        
          <input
          placeholder="Email Address"
            type="text"
            value={emailAddress}
            onChange={(e) => setEmailAddress(e.target.value)}
            required
          />
          {errors.includes("Email address is invalid") && (
            <p className="error-messages">* Email address is invalid</p>
          )}
          
          <input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {errors.includes("Password is too short (minimum is 6 characters)") && (
            <p className="error-messages">* Password is too short (minimum is 6 characters)</p>
          )}
          <input 
            placeholder="First Name"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <input 
            placeholder="Last Name"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
          <input 
            placeholder="Phone Number"
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
          {errors.includes("Phone number is not a number") && (
            <p className="error-messages">* Phone number is not a number</p>
          )}
          <select 
            id="primary_dining_loc" 
            value={primaryDiningLocation}
            onChange={(e) => setPrimaryDiningLocation(e.target.value)}
            required
            > 
            <option hidden>Select a Primary Dining Location</option>
            <option>New York City</option>
            </select>
            {errors.includes("Primary dining location can't be blank") && (
            <p className="error-messages">*Primary dining location can't be blank</p>
          )}

        <button type="submit">Sign Up</button>
      <button className="demo-login" onClick={loginDemoUser}> Login Demo User</button>
      </form>
    </div>
  );
```
  
## Restaurants
  
Restaurants are displayed on the splash page, which filters restaurants based on the type of cuisine and selects 9 random restaurants from each category. The left and right buttons on each container scroll the container left and right.

<img width="1437" alt="Screenshot 2023-04-14 at 3 26 00 PM" src="https://user-images.githubusercontent.com/113265748/232137886-b12f1aaf-217f-4bc9-8ecd-f36fb6b37ed3.png">

```js
useEffect(() => {
    dispatch(getRestaurants());
    const scrollLeftBtns = document.querySelectorAll(".scroll-left-btn")
    const scrollRightBtns = document.querySelectorAll(".scroll-right-btn")
    const scrollers = document.querySelectorAll(".restaurant-scroller")
    
    for(let i = 0; i < scrollers.length; i++) {
      scrollLeftBtns[i].addEventListener("click", () => {
        scrollers[i].scrollLeft -= 300
      });
      scrollRightBtns[i].addEventListener("click", () => {
        scrollers[i].scrollLeft += 300
      });  
    }
  }, [dispatch])
```

Restaurants have their own show page where you can view information about the restaurant and reviews. The number of reviews and stars in the information update upon creating a new review.


![ezgif com-video-to-gif](https://user-images.githubusercontent.com/113265748/232139207-8328f129-11f2-4a0a-a02d-6facb00fd590.gif)

```js
const calculateAvgRating = () => {
    let totalRating = 0;
    reviews.forEach(review => {
      totalRating += review.rating;
    })
    return totalRating/reviews.length
}
const avgRating = calculateAvgRating();

useEffect(() => {
    dispatch(getRestaurant(id));
    dispatch(fetchReviews(id));
}, [dispatch, id])
  
```

## Reservations

When signed in, there will be a reservation form rendered on each individual restaurant's show page. Users can make reservations anytime between 8am and 4pm. Only times and dates in the future are allowed to be selected. Users cannot make two reservations for the same time.

![ezgif com-video-to-gif (1)](https://user-images.githubusercontent.com/113265748/232140776-4528288d-3e78-4dd7-858a-9a4ffb6ae5ae.gif)

```js

const { id } = useParams();
const currentUser = useSelector(state => state.session.user);
const reservations = useSelector(getReservations).filter(reservation => reservation.userId == currentUser.id && reservation.restaurantId == id)

let availableReservations = [];
if (date === currentDate) {
    for(let i = nextHour; i >= 8 && i <= 16; i++) {
      if(!reservations.some(reservation => reservation.time === i && reservation.date === date)) {
        availableReservations.push(i)
      }
    }
  }
  else {
    for(let i = 8; i <= 16; i ++) {
      if(!reservations.some(reservation => reservation.time === i && reservation.date === date)) {
        availableReservations.push(i)
      }
    }
  }
  ```
  
Users are also allowed to edit and delete only reservations that they made for themselves. The link to the edit form is only rendered on a user's profile page, but there is a redirect in case someone tries to navigate directly to the edit url.

![ezgif com-video-to-gif (2)](https://user-images.githubusercontent.com/113265748/232141676-f00e4399-97b1-49bb-a67e-d237fb4eb801.gif)

```js
return (
    <>
      {(!reservation || currentUser?.id !== reservation.userId) && (<Redirect to="/"></Redirect>) }
```

## Reviews

Users are allowed to create at most one review per restaurant. If there is no user signed in, or the signed in user has already left a review for the restaurant the review form will not be rendered. The star rating will update with each new review.

![ezgif com-video-to-gif (3)](https://user-images.githubusercontent.com/113265748/232143390-89495e66-26e8-4361-9f81-967ef6199664.gif)

```js

const reviews = useSelector(getReviews);
{currentUser && !reviews.some(review => review.userId === currentUser.id) &&
        (<CreateReviewForm/>)
}
```

Users are also allowed to update or delete reviews that they created.

![ezgif com-video-to-gif (4)](https://user-images.githubusercontent.com/113265748/232143957-df584680-dabc-45e5-aa2f-ecbc68fe030d.gif)

{currentUser && review.userId === currentUser.id && (
  <div className="review-delete-edit-btns">
    <button className="delete-review-btn" onClick={() => {
      dispatch(deleteReview(review.id))}}>
        <img className="delete-btn-icon" src={trash}/>
    </button>
    <Link to={`/reviews/${review.id}/edit`}>
      <button className="edit-review-btn">
        <i className="fa-regular fa-pen-to-square"></i>
      </button>
    </Link>
  </div>
)}


## Reviews

Users can search for restaurants for by name. There will be a list of restaurants matching the name rendered.

![ezgif com-video-to-gif (5)](https://user-images.githubusercontent.com/113265748/232145166-27efafac-fa8d-4683-bbaf-1df065e52590.gif)

```js

def search
  @restaurants = Restaurant.where("lower(name) LIKE ?", "%#{params[:query]}%")
  render :search
end

export const fetchSearchResults = (query) => async dispatch => {
  const res = await fetch(`/api/restaurants/search?query=${query}`);
  const data = await res.json();
  dispatch(receiveSearchResults(data));
};
  ```
