import { useEffect, useState } from "react";
import "./ReservationForm.css"
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createReservation, fetchReservations, getReservations } from "../../store/reservations";
import { Modal } from "../../context/Modal";
import ReservationCompleteMessage from "./ReservationCompleteMessage";

const ReservationForm = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const currentUser = useSelector(state => state.session.user);
  const reservations = useSelector(getReservations).filter(reservation => reservation.userId == currentUser.id && reservation.restaurantId == id)
  const [month,day,year] = new Date().toLocaleDateString("en-US", { timeZone: "America/New_York" }).split("/");
  let availableReservations = [];
  let reservation;
  const currentDate = new Date(year, month - 1, day).toISOString().split("T")[0]
  const nextHour = new Date().getHours() + 1
  const [date, setDate] = useState(currentDate);
  const [time, setTime] = useState(availableReservations[0])
  const [numOfGuests, setNumOfGuests] = useState(2);
  const [showCompleteResModal, setShowCompleteResModal] = useState(false);
  const restaurant = useSelector(state => state.restaurants[id])
  
  const selectTimeBtns = document.querySelectorAll(".select-time-btn")
  selectTimeBtns.forEach(btn => {
    if(btn.value === time) {
      btn.classList.add("clicked-time-btn")
    }
    else {
      btn.classList.remove("clicked-time-btn")
    }
  })
  
  if (date === currentDate) {
    for(let i = nextHour; i >= 8 && i <= 16; i++) {
      if(!reservations.some(reservation => reservation.time === i && reservation.date === date)) {
        availableReservations.push(i)
      }
    }
  }
  else {
    for(let i = 8; i <= 16; i ++) {
      if(!reservations.some(reservation => reservation.time === i && reservation.date === date)) {
        availableReservations.push(i)
      }
    }
  }
  
  
  useEffect(() => {
    dispatch(fetchReservations())
  }, [dispatch, id])

  const handleSubmit = (e) => {
    e.preventDefault();
    reservation = {
      time: time,
      date: date,
      restaurantId: id,
      userId: currentUser.id,
      numOfGuests
    }
    dispatch(createReservation(reservation)).then(res => {
      if (res.ok) {
        setShowCompleteResModal(true)
      }
    })
  }




  return (
    <div>
      
      <Modal onClose={() => {setShowCompleteResModal(false)
        setDate("");
        setTime("");
        setNumOfGuests(2)}}>
        <ReservationCompleteMessage props={{restaurant, time, date, numOfGuests}}/>
      </Modal>
      <div className="reservation-form-container">
        <form className="reservation-form" onSubmit={handleSubmit}>
          <h3>Make a Reservation</h3>
          <div className="reservation-info-container">
            <div >
              <label for="party-size" id="party-size-label">Party Size</label>
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
            </div>

            <div className="reservation-time-date-container">
              <div className="reservation-date-select">
              <label for="reservation-date">Date</label>
              <input
                type="date"
                value={date}
                min={currentDate}
                onChange={(e) => setDate(e.target.value)}
                required
              />
              </div>

              <div className="reservation-time-select">
                <label for="reservation-time">Time</label>
                <select name="reservation-time" onChange={(e) => setTime(e.target.value)}>
                  <option selected disabled value={null}>Select a time</option>
                  {availableReservations.map(resTime => (
                    <option value={resTime}>{resTime > 12 ? `${resTime % 12}` : `${resTime}`}:00 {resTime >= 12 ?"PM" : "AM"}</option>
                  ))}
                  {availableReservations.length === 0 && <option disabled>No more reservations available for this day</option>}
                </select>
              </div>
            </div>

            <button className="make-res-button" type="submit">Find a time</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ReservationForm;