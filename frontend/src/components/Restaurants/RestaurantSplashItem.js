import "./RestaurantSplashItem.css"

const RestaurantSplashItem = ({restaurant}) => {
  const { id, name, phoneNumber, address, cuisine, description } = restaurant;
  console.log(id)
  return (
    <a href={`/restaurants/${id}`}><div className="splash-rest-item">
      <div className="splash-rest-info">
        <h3>{name}</h3>
        <h3>{phoneNumber}</h3>
        <h3>{address}</h3>
        <h3>{cuisine}</h3>
        <h3>{description}</h3>
      </div>
    </div></a>
  )
}

export default RestaurantSplashItem;