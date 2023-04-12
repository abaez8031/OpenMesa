import { Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';
import ReservationSearch from "./components/ReservationSearch"
import UserShow from './components/UserShow';
import RestaurantsIndex from './components/Restaurants/RestaurantsIndex';
import RestaurantShow from './components/Restaurants/RestaurantShow';
import RestaurantsSplashPage from "./components/Restaurants/RestaurantsSplashPage"
import EditReviewForm from './components/Reviews/EditReviewForm';
import ReservationEditForm from './components/Reservations/ReservationEditForm';


function App() {

  return (
    <>
    <Navigation/>
    <Switch>
      <Route exact path="/">
        <ReservationSearch/>
        <RestaurantsSplashPage/>
      </Route>
      <Route exact path="/users/:userId">
        <UserShow />
      </Route>
      <Route exact path="/restaurants">
        <RestaurantsIndex/>
      </Route>
      <Route exact path="/restaurants/:id">
        <RestaurantShow/>
      </Route>
    </Switch>
    <Route exact path="/reviews/:id/edit">
      <EditReviewForm/>
    </Route>
    <Route exact path="/reservations/:id/edit">
      <ReservationEditForm/>
    </Route>
    </>
  );
}

export default App;
