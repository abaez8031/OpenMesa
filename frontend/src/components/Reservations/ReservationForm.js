import { useState } from "react";
import "./ReservationForm.css"
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createReservation } from "../../store/reservations";

const ReservationForm = () => {

  const dispatch = useDispatch();
  const { id } = useParams();
  const currentUser = useSelector(state => state.session.user);
  const nextHour = new Date().getHours() + 1
  const [numOfGuests, setNumOfGuests] = useState(2);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("")
  const availableReservations = [];
  const [month,day,year] = new Date().toLocaleDateString("en-US", { timeZone: "America/New_York" }).split("/");
  const currentDate = new Date(year, month - 1, day).toISOString().split("T")[0]
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
      availableReservations.push(i)
    }
  }
  else {
    for(let i = 8; i <= 16; i ++) {
      availableReservations.push(i)
    }
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    let reservation = {
      time: time,
      date: date,
      restaurantId: id,
      userId: currentUser.id,
      numOfGuests
    }
    dispatch(createReservation(reservation))
    setDate("")
    setTime("")
    setNumOfGuests(2)
  }




  return (
    <form onSubmit={handleSubmit}>
      <label>Party Size:
      <input
        type="number"
        min="2"
        max="20"
        value={numOfGuests}
        onChange={(e) => setNumOfGuests(e.target.value)}
        required
      />
      </label>

      <label>Date:
      <input
        type="date"
        value={date}
        min={currentDate}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      </label>

      {availableReservations.map((resTime,i) => (
        <button className="select-time-btn" key={i} value={resTime} onClick={(e) => {
          e.preventDefault();
          setTime(e.target.value)
        }}>{resTime > 12 ? `${resTime % 12}` : `${resTime}`}:00 {resTime >= 12 ?"PM" : "AM"}</button>
      )
      )}

      <button type="submit">Make Reservation</button>
    </form>
  );
}

export default ReservationForm;