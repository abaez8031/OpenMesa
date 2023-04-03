import { Route, Switch } from 'react-router-dom';
import LoginFormPage from './components/LoginFormPage';
import SignupFormPage from './components/SignupPage';
import Navigation from './components/Navigation';

function App() {

  return (
    <>
    <Navigation/>
    <Switch>
      <Route exact path="/login">
        <LoginFormPage />
      </Route>
      <Route exact path="/signup">
        <SignupFormPage />
      </Route>
      <Route exact path="/">
      </Route>
    </Switch>
    </>
  );
}

export default App;
