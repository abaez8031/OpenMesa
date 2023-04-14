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
