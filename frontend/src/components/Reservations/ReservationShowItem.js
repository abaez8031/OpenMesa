import { Link } from "react-router-dom";
import "./ReservationShowItem.css"
import calendar from "../../assets/icons8-calendar-24.png"
import { useDispatch } from "react-redux";
import { deleteReservation } from "../../store/reservations";
import trash from "../../assets/icons8-trash-can-64.png"

const ReservationShowItem = ({reservation}) => {
  const {numOfGuests, time, restaurant, user, date} = reservation
  const dispatch = useDispatch()
  const [year, month, day] = date.split("-")

  return (
      <div className="reservation-show-info">
        <div className="reservation-show-left">
          <img src="https://www.travelandleisure.com/thmb/Jw-KKDrA6z1nvDJbr5kyKJSG4vk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/TAL-header-oiji-mi-NEWNYCDINE0223-8c392080598d44dbafdbc87bbcf4d7dd.jpg" alt="res-show-img"></img>
        </div>
        <div className="reservation-show-right">
          <h3 className="reservation-rest-name">Restaurant: {restaurant.name}</h3>
          <p><i className="fa-regular fa-user fa-xl fa-user-res"></i> {numOfGuests}</p>
          <p><i className="fa-sharp fa-regular fa-clock"></i>{time > 12 ? `${time % 12}` : `${time}`}:00 {time >= 12 ?"PM" : "AM"}</p>
          <p><img className="reservation-clock" src={calendar}/>{month}-{day}-{year}</p>
        </div>

        <div className="reservation-delete-edit-btns">
          <button className="delete-reservation-btn" onClick={() => {
                  dispatch(deleteReservation(reservation.id))
                  }}><img className="delete-res-icon" src={trash}/>
          </button>
          <Link>
          <button className="edit-reservation-btn">
            <i className="fa-regular fa-pen-to-square edit-res-icon"></i>
          </button>
         </Link>
        </div>
      </div>
  )
}

export default ReservationShowItem;