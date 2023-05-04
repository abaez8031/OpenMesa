import "./ReservationCompleteMessage.css"

const ReservationCompleteMessage = ({props}) => {
  const {restaurant, time, date, numOfGuests} = props;
  const [year,month, day] = date.split("-")
  return (
    <div className="complete-res-message-container">
      <h3 className="complete-res-header">Reservation Successful!</h3>
      <p>You have created a reservation at {restaurant.name} for {numOfGuests} at {time}:00 {time >= 12 ? "PM" : "AM"} on {month}-{day}-{year}!</p>
      <p>You will be enjoying a nice {restaurant.cuisine} dish at {restaurant.address.split(",")[0]}.</p>
      <p>For more information call ({restaurant.phoneNumber.slice(0,3)}) {restaurant.phoneNumber.slice(3,6)}-{restaurant.phoneNumber.slice(6,10)}</p>
    </div>
  )
}

export default ReservationCompleteMessage