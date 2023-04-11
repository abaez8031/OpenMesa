import csrfFetch from "./csrf";

const RECEIVE_RESERVATION = "reservations/RECEIVE_RESERVATION";
const RECEIVE_RESERVATIONS = "reservations/RECEIVE_RESERVATIONS";
const REMOVE_RESERVATION = "reservations/REMOVE_RESERVATION"

const receiveReservation = (reservation) => ({
  type: RECEIVE_RESERVATION,
  reservation
})

const receiveReservations = (reservations) => ({
  type: RECEIVE_RESERVATIONS,
  reservations
})

const removeReservation = (reservationId) => ({
  type: REMOVE_RESERVATION,
  reservationId
})

export const getReservation = (reservationId) => state => {
  if (state.reservations) {
    return state.reservations[reservationId]
  }
  else {
    return null
  }
}

export const getReservations = (state) => {
  if (state.reservations) {
    return Object.values(state.reservations)
  }
  else {
    return []
  }
}


export const fetchReservations = () => async dispatch => {
  const res = await csrfFetch(`/api/reservations`)
  if (res.ok) {
    const data = await res.json();
    dispatch(receiveReservations(data))
    return res;
  }
}

export const fetchReservation = (reservationId) => async dispatch => {
  const res = await csrfFetch(`/api/reservations/${reservationId}`)
  if (res.ok) {
    const data = await res.json();
    dispatch(receiveReservation(data))
    return res;
  }
}

export const createReservation = (reservation) => async dispatch => {
  const res = await csrfFetch(`/api/reservations`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(reservation)
  })
  if (res.ok) {
    const data = await res.json();
    dispatch(receiveReservation(data))
  }
  return res;
}

export const updateReservation = (reservation) => async dispatch => {
  const res = await csrfFetch(`/api/reservations/${reservation.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(reservation)
  })
  if (res.ok) {
    const data = await res.json();
    dispatch(receiveReservation(data))
  }
}

export const deleteReservation = (reservationId) => async dispatch => {
  const res = await csrfFetch(`/api/reservations/${reservationId}`,
  {method: "DELETE"
})
if (res.ok) {
  dispatch(removeReservation(reservationId))
}
}

const reservationsReducer = (initialState = {}, action) => {
  switch (action.type) {
    case RECEIVE_RESERVATION:
      return {...initialState, [action.reservation.id]: action.reservation}
    case RECEIVE_RESERVATIONS:
      return {...initialState, ...action.reservations}
    case REMOVE_RESERVATION:
      const newState = {...initialState}
      delete newState[action.reservationId]
      return newState;
    default:
      return initialState
  }
}

export default reservationsReducer;