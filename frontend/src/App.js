import { Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';
import ReservationSearch from "./components/ReservationSearch"
import UserShow from './components/UserShow';


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
    </Switch>
    </>
  );
}

export default App;
