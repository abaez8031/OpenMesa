import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from "../../store/session";
import './SignupForm.css';

const SignupForm = () => {
  const dispatch = useDispatch();
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [primaryDiningLocation, setPrimaryDiningLocation] = useState("")
  const [errors, setErrors] = useState([]);
  const loginDemoUser = () => {
    dispatch(sessionActions.login({emailAddress: "example@gmail.com", password: "password"}))
  }




  const handleSubmit = (e) => {
    e.preventDefault();
    {
      setErrors([]);
      return dispatch(sessionActions.signup({ emailAddress, password, firstName, lastName, phoneNumber, primaryDiningLocation }))
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
  };
  
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
}

export default SignupForm;