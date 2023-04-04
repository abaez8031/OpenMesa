import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import './SignupForm.css';

const SignupForm = () => {
  const dispatch = useDispatch();
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [primaryDiningLocation, setPrimaryDiningLocation] = useState("")
  const loginDemoUser = () => {
    dispatch(sessionActions.login({emailAddress: "example@gmail.com", password: "password"}))
  }


  const [errors, setErrors] = useState([]);


  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
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
    return setErrors(['Confirm Password field must be the same as the Password field']);
  };

  return (
    <>
    <form onSubmit={handleSubmit}>
      <ul>
        {errors.map(error => <li key={error}>{error}</li>)}
      </ul>
      
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
        <input
          placeholder="Confirm Password"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
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
        <select 
          id="primary_dining_loc" 
          value={primaryDiningLocation}
          onChange={(e) => setPrimaryDiningLocation(e.target.value)}
          required
          > 
          <option hidden>Select a Primary Dining Location</option>
          <option>New York City</option>
          </select>

      <button type="submit">Sign Up</button>
    <button className="demo-login" onClick={loginDemoUser}> Login Demo User</button>
    </form>
    </>
  );
}

export default SignupForm;