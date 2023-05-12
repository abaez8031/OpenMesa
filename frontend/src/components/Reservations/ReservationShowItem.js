import { Link } from "react-router-dom";
import "./ReservationShowItem.css"
import calendar from "../../assets/icons8-calendar-24.png"
import { useDispatch } from "react-redux";
import { deleteReservation } from "../../store/reservations";
import trash from "../../assets/icons8-trash-can-64.png"
import clock from "../../assets/icons8-clock-26.png"
import userIcon from "../../assets/icons8-user-24.png"

const ReservationShowItem = ({reservation}) => {
  const {numOfGuests, time, restaurant, user, date} = reservation
  console.log(reservation)
  const dispatch = useDispatch()
  const [year, month, day] = date.split("-")
  console.log(restaurant)

  return (
      <div className="reservation-show-info">
        <div className="reservation-show-left">
          <img src="https://www.travelandleisure.com/thmb/Jw-KKDrA6z1nvDJbr5kyKJSG4vk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/TAL-header-oiji-mi-NEWNYCDINE0223-8c392080598d44dbafdbc87bbcf4d7dd.jpg" alt="res-show-img"/>
        </div>
        <div className="reservation-show-right">
          <Link to={`/restaurants/${restaurant.id}`}><h3 className="reservation-rest-name"> {restaurant.name}</h3></Link>
          <div className="num-of-guests-p"><img className="user-icon" src={userIcon}/> <span>{numOfGuests}</span></div>
          <div className="time-p"><img className="clock-icon" src={clock}/><span>{time > 12 ? `${time % 12}` : `${time}`}:00 {time >= 12 ?"PM" : "AM"}</span></div>
          <div className="calendar-div"><img className="reservation-calendar" src={calendar}/><span>{month}-{day}-{year}</span></div>
        </div>

        <div className="reservation-delete-edit-btns">
          <Link to={`/reservations/${reservation.id}/edit`}>
            <button className="edit-reservation-btn">
              <i className="fa-regular fa-pen-to-square edit-res-icon"></i>
            </button>
          </Link>
          <button className="delete-reservation-btn" onClick={() => {
                  dispatch(deleteReservation(reservation.id))
                  }}><img className="delete-res-icon" src={trash}/>
          </button>
          
        </div>
      </div>
  )
}

export default ReservationShowItem;