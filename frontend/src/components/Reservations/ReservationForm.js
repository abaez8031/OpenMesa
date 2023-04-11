import { useState } from "react";

const ReservationForm = () => {

  const nextHour = new Date().getHours() + 1
  const [numOfGuests, setNumOfGuests] = useState(0);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("")
  const availableReservations = [];
  const [month,day,year] = new Date().toLocaleDateString("en-US", { timeZone: "America/New_York" }).split("/");
  const currentDate = new Date(year, month - 1, day).toISOString().split("T")[0]

  if (date === currentDate) {
    for(let i = nextHour; i >= 16 && i <= 23; i ++) {
      availableReservations.push(i)
    }
  }
  else {
    for(let i = 16; i >= 16 && i <= 23; i ++) {
      availableReservations.push(i)
    }
  }
  

  return (
    <form>
      <label>Party Size:
      <input
        type="number"
        min="1"
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
        <button key={i}>{resTime % 12}:00 PM</button>
      )
        
      )}

      <button type="submit">Make Reservation</button>
    </form>
  );
}

export default ReservationForm;