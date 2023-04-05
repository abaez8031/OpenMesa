import { useDispatch } from "react-redux";

const RestaurantShow = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const restaurant = useSelector((state) => state.restaurants[id]);

  
}

export default RestaurantShow;