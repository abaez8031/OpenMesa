import csrfFetch from "./csrf";


const SET_CURRENT_USER = "session/setCurrentUser";
const REMOVE_CURRENT_USER = "session/removeCurrentUser";

const setCurrentUser = user => ({
  type: SET_CURRENT_USER, user
});

const removeCurrentUser = () => ({
  type: REMOVE_CURRENT_USER
});

const storeCurrentUser = user => {
  if (user) sessionStorage.setItem("currentUser", JSON.stringify(user));
  else sessionStorage.removeItem("currentUser");
}

export const login = (user) => async dispatch => {
  const { emailAddress, password } = user;
  const res = await csrfFetch("/api/session", {
    method: "POST",
    body: JSON.stringify({ emailAddress, password })
  });
  const data = await res.json();
  storeCurrentUser(data.user);
  dispatch(setCurrentUser(data.user));
  return res;
}

export function storeCSRFToken(res) {
  const csrfToken = res.headers.get("X-CSRF-Token")
  if (csrfToken) sessionStorage.setItem("X-CSRF-Token", csrfToken)
}

export const restoreSession = () => async dispatch => {
  const res = await csrfFetch("/api/session");
  storeCSRFToken(res);
  const data = await res.json();
  storeCurrentUser(data.user);
  dispatch(setCurrentUser(data.user));
  return res;
};

export const signup = (user) => async (dispatch) => {
  const { emailAddress, password, firstName, lastName, phoneNumber, primaryDiningLocation } = user;
  const res = await csrfFetch("/api/users", {
    method: "POST",
    body: JSON.stringify( { user: {
      emailAddress,
      password,
      firstName,
      lastName,
      phoneNumber,
      primaryDiningLocation
    }})
  });
  const data = await res.json();
  storeCurrentUser(data.user);
  dispatch(setCurrentUser(data.user));
  return res;
};

const initialState = { 
  user: JSON.parse(sessionStorage.getItem("currentUser"))
};

const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return { ...state, user: action.user };
    case REMOVE_CURRENT_USER:
      return { ...state, user: null };
    default:
      return state;
  }
};

export default sessionReducer;