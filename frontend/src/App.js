import { Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';
import ReservationSearch from "./components/ReservationSearch"
import UserShow from './components/UserShow';
import RestaurantsIndex from './components/Restaurants/RestaurantsIndex';
import RestaurantShow from './components/Restaurants/RestaurantShow';


function App() {

  return (
    <>
    <Navigation/>
    <Switch>
      <Route exact path="/">
        <ReservationSearch/>
      </Route>
      <Route exact path="/users/:userId">
        <UserShow />
      </Route>
      <Route exact path="/restaurants">
        <RestaurantsIndex/>
      </Route>
      <Route exact path = "/restaurants/:id">
        <RestaurantShow/>
      </Route>
    </Switch>
    </>
  );
}

export default App;
