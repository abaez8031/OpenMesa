import "./ReservationSearch.css"

const ReservationSearch = () => {
  return (
    <div className="reservation-search">
      <div className="reservation-search-header">
        <h3>Find your table for any occasion</h3>
      </div>
      <div className="search-bar-input">
        <div className="search-bar">
          <input className="search-bar" type="text" placeholder="Location, Restaurant or Cuisine"></input>
        </div>
        <button className="submit-search-btn">Let's Go</button>
      </div>

    </div>
  )
}

export default ReservationSearch;