import "./RestaurantSplashItem.css"

const RestaurantSplashItem = ({restaurant}) => {
  const { id, name, cuisine, reviews } = restaurant;
  const calculateAvgRating = () => {
    let totalRating = 0;
    reviews.forEach(review => {
      totalRating += review.rating;
    })
    let avgRating = totalRating/reviews.length
    return avgRating;
  }
  const avgRating = calculateAvgRating()

  return (
    <a className="splash-rest-item-container" href={`/restaurants/${id}`}><div className="splash-rest-item">
      <div className="splash-rest-img"><img src={restaurant?.photoUrl} alt="splash-rest-img"/></div>

      <div className="splash-rest-info">
        <h3 className="splash-rest-info-name">{name}</h3>
        <div className="review-star-container">
        <div className="star-container">
        <i className={`fa-sharp fa-solid fa-star ${Math.round(avgRating) >= 1 ? "active-star" : ""}`}></i>
        <i className={`fa-sharp fa-solid fa-star ${Math.round(avgRating) >= 2 ? "active-star" : ""}`}></i>
        <i className={`fa-sharp fa-solid fa-star ${Math.round(avgRating) >= 3 ? "active-star" : ""}`}></i>
        <i className={`fa-sharp fa-solid fa-star ${Math.round(avgRating) >= 4 ? "active-star" : ""}`}></i>
        <i className={`fa-sharp fa-solid fa-star ${Math.round(avgRating) >= 5 ? "active-star" : ""}`}></i>
        </div>
        <div className="review-container">{reviews.length} Reviews</div>
        </div>

        <div className="cuisine-price-neighborhood-container"><h3>{cuisine}</h3>
        <div className="price-container">
        • <i className="fa-thin fa-dollar-sign"></i>
          <i className="fa-thin fa-dollar-sign"></i>
          <i className="fa-thin fa-dollar-sign"></i>
          <i className="fa-thin fa-dollar-sign"></i>
          </div>
          <div className="neighborhood-container">• Neighborhood</div>
          </div>
          
        <div className="splash-booked">
          <i className="fa-sharp fa-solid fa-arrow-trend-up"></i>
          <span>Booked {Math.trunc(Math.random() * 200 + 1)} times today</span>
          </div>


      </div>
    </div></a>
  )
}

export default RestaurantSplashItem;