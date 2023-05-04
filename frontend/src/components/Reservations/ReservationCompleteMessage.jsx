import "./ReservationCompleteMessage.css"

const ReservationCompleteMessage = ({props}) => {
  const {restaurant, time, date, numOfGuests} = props;
  console.log(time,date)
  return (
    <div className="complete-res-message-container">
      <h3 className="complete-res-header">Reservation Successful!</h3>
      <p>You have created a reservation at {restaurant.name} for {numOfGuests} at {time} on {date}</p>
    </div>
  )
}

export default ReservationCompleteMessage