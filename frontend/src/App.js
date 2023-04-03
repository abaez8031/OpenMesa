import { Route, Switch } from 'react-router-dom';
import SignupForm from './components/SignupPage/SignupForm';
import Navigation from './components/Navigation';


function App() {

  return (
    <>
    <Navigation/>
    <Switch>
      <Route exact path="/">
      </Route>
    </Switch>
    </>
  );
}

export default App;
