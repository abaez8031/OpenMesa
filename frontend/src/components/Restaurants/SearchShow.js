import { useSelector } from "react-redux";
import { fetchSearchResults } from "../../store/search";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import RestaurantSearchItem from "./RestaurantSearchItem";
import "./RestaurantSearchItem.css"

const Search = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    useEffect(() => {
        const query = history.location.search.split("=")[1];
        dispatch(fetchSearchResults(query))
    }, []);

    const searchResults = useSelector((state) => Object.values(state.searchResults));
    return(
        <div className="restaurant-search-list-container">
            <div className="restaurant-search-list">
                {searchResults.map(restaurant => (
                    <RestaurantSearchItem restaurant={restaurant}/>
                )
                    
                )}
            </div>
        </div>
    );
}
export default Search;