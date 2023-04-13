import "./ReservationSearch.css"
import SearchBar from "./SearchBar";

const ReservationSearch = () => {
  return (
    <div className="reservation-search">
      <div className="reservation-search-header">
        <h3>Find your table for any occasion</h3>
      </div>
      <div className="search-bar-input">
        <SearchBar/>
      </div>

    </div>
  )
}

export default ReservationSearch;