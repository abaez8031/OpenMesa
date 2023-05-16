import { useDispatch, useSelector } from "react-redux";
import { Redirect, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchReservation } from "../../store/reservations";
import { getReservation } from "../../store/reservations";
import { updateReservation } from "../../store/reservations";
import "./ReservationEditForm.css"

const ReservationEditForm = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const currentUser = useSelector(state => state.session.user)
  const nextHour = new Date().getHours() + 1
  const [numOfGuests, setNumOfGuests] = useState(2);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("")
  let availableReservations = [];
  const [month,day,year] = new Date().toLocaleDateString("en-US", { timeZone: "America/New_York" }).split("/");
  const currentDate = new Date(year, month - 1, day).toISOString().split("T")[0]
  let reservation = useSelector(getReservation(id))
  const restaurant = reservation?.restaurant.name

  const editTimeBtns = document.querySelectorAll(".edit-time-btn")
  editTimeBtns.forEach(btn => {
    if(btn.value == time) {
      btn.classList.add("clicked-edit-time-btn")
    }
    else {
      btn.classList.remove("clicked-edit-time-btn")
    }
  })

  if (date === currentDate) {
    for(let i = nextHour; i >= 8 && i <= 16; i++) {
      availableReservations.push(i)
    }
  }
  else {
    for(let i = 8; i <= 16; i ++) {
      availableReservations.push(i)
    }
  }

    useEffect(() => {
    dispatch(fetchReservation(id))
    setNumOfGuests(reservation?.numOfGuests);
    setDate(reservation?.date)
    setTime(reservation?.time)
  }, [dispatch, id])

  const handleSubmit = (e) => {
    e.preventDefault();
    reservation = {
      ...reservation,
      numOfGuests,
      date: date,
      time: time
    }
    dispatch(updateReservation(reservation))
    setDate("")
    setTime("")
    setNumOfGuests(2)
    window.location.replace(`/users/${reservation.userId}`);
  }

  return (
    <>
      {(!reservation || currentUser?.id !== reservation.userId) && (<Redirect to="/"></Redirect>) }
      
      {reservation && reservation.userId === currentUser?.id && (<div className="edit-reservation-form-container">
        {restaurant && (<h3>Update Reservation at {restaurant}</h3>)}
        <form className="edit-reservation-form" onSubmit={handleSubmit}>
          <label>Party Size:
          <select name="party-size" className="party-size-select" required onChange={(e) => setNumOfGuests(e.target.value)}>
                <option value="1">1 person</option>
                <option selected value="2">2 people</option>
                <option value="3">3 people</option>
                <option value="4">4 people</option>
                <option value="5">5 people</option>
                <option value="6">6 people</option>
                <option value="7">7 people</option>
                <option value="8">8 people</option>
                <option value="9">9 people</option>
                <option value="10">10 people</option>
                <option value="11">11 people</option>
                <option value="12">12 people</option>
                <option value="13">13 people</option>
                <option value="14">14 people</option>
                <option value="15">15 people</option>
                <option value="16">16 people</option>
                <option value="17">17 people</option>
                <option value="18">18 people</option>
                <option value="19">19 people</option>
                <option value="20">20 people</option>
              </select>
          </label>
            
          <div className="reservation-time-date-container">
          <div className="reservation-date-select">
          <label>Date:</label>
          <input
                type="date"
                value={date}
                min={currentDate}
                onChange={(e) => setDate(e.target.value)}
                required
              />
          </div>

          <div className="reservation-time-select">
            <label>Time:</label>
          <select name="reservation-time" onChange={(e) => setTime(e.target.value)}>
            <option selected disabled value={null}>Select a time</option>
              {availableReservations.map(resTime => (
            <option selected={time === resTime ? true : false} value={resTime}>{resTime > 12 ? `${resTime % 12}` : `${resTime}`}:00 {resTime >= 12 ?"PM" : "AM"}</option>
                  ))}
            {availableReservations.length === 0 && <option disabled>No more reservations available for this day</option>}
          </select>
          </div>
          </div>
          
          <button className= "edit-res-button" type="submit">Update Reservation</button>
        </form>
      </div>)}
    </>
  );
}


export default ReservationEditForm;