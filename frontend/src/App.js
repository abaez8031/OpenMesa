import { Route, Switch } from 'react-router-dom';
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
