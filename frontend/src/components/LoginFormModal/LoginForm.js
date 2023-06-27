import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch} from "react-redux";
import './LoginForm.css';

const LoginForm = () => {
  const dispatch = useDispatch();
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  
  const loginDemoUser = () => {
    setEmailAddress("example@gmail.com");
    setPassword('password');
    dispatch(sessionActions.login({emailAddress: "example@gmail.com", password: "password"}));
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ emailAddress, password }))
      .catch(async (res) => {
        let data;
        try {
          data = await res.clone().json();
        } catch {
          data = await res.text();
        }
        if (data?.errors) setErrors(data.errors);
        else if (data) setErrors([data]);
        else setErrors([res.statusText]);
      });
  }

  return (
    <div className="login-form-container">
      <form onSubmit={handleSubmit}>
        {/* <ul>
          {errors.map(error => <li key={error}>{error}</li>)}
        </ul> */}

        {errors.length > 0 && (<p className="error-messages">* {errors[0]}</p>)}
          <input
            placeholder="Email Address"
            type="text"
            value={emailAddress}
            onChange={(e) => setEmailAddress(e.target.value)}
            required
          />
          <input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        <button type="submit">Log In</button>
        <button className="demo-login" onClick={loginDemoUser}> Login Demo User</button>
      </form>
    </div>
  );
}

export default LoginForm;