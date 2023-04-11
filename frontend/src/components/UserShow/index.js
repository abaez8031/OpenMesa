import { useSelector, useDispatch } from "react-redux";
import { Redirect, useParams } from "react-router-dom";
import { fetchReservations, getReservations } from "../../store/reservations";
import { useEffect } from "react";
import ReservationShowItem from "../Reservations/ReservationShowItem";
import "./UserShow.css"

const UserShow = () => {
  const dispatch = useDispatch()
  const currentUser = useSelector(state => state.session.user)
  const { userId } = useParams();
  const reservations = useSelector(getReservations).filter(reservation => reservation.userId === currentUser.id)
  console.log(reservations)

  useEffect(() => {
    dispatch(fetchReservations())
  }, [dispatch, userId])

  if(!currentUser || currentUser.id != userId) return <Redirect to="/"/>
  return (
    <div>
      <h3 className="user-show-header">Your Reservations</h3>

      {reservations.map(reservation => (
        <ReservationShowItem key={reservation.id} reservation={reservation}/>
      ))}
    </div>
  )
}

export default UserShow;