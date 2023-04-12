import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchReservation } from "../../store/reservations";
import { getReservation } from "../../store/reservations";
import { updateReservation } from "../../store/reservations";
import "./ReservationEditForm.css"

const ReservationEditForm = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const nextHour = new Date().getHours() + 1
  const [numOfGuests, setNumOfGuests] = useState(2);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("")
  let availableReservations = [];
  const [month,day,year] = new Date().toLocaleDateString("en-US", { timeZone: "America/New_York" }).split("/");
  console.log(month,day,year)
  const currentDate = new Date(year, month - 1, day).toISOString().split("T")[0]
  let reservation = useSelector(getReservation(id))
  const restaurant = reservation?.restaurant.name

  const editTimeBtns = document.querySelectorAll(".edit-time-btn")
  editTimeBtns.forEach(btn => {
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
  }

  return (
    <>
    {restaurant && (<h3>{restaurant}</h3>)}
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
        <button className="edit-time-btn" key={i} value={resTime} onClick={(e) => {
          e.preventDefault();
          setTime(e.target.value)
          }}>{resTime > 12 ? `${resTime % 12}` : `${resTime}`}:00 {resTime >= 12 ?"PM" : "AM"}</button>
      ))}
      
      <button type="submit">Update Reservation</button>
    </form>
    </>
  );
}


export default ReservationEditForm;