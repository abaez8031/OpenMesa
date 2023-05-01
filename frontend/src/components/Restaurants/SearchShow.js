import { useSelector } from "react-redux";
import { fetchSearchResults } from "../../store/search";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import RestaurantSearchItem from "./RestaurantSearchItem";
import "./RestaurantSearchItem.css"
import SearchBar from "../ReservationSearch/SearchBar";
import "./SearchShow.css"

const Search = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    useEffect(() => {
        const query = history.location.search.split("=")[1];
        dispatch(fetchSearchResults(query))
    }, []);

    const searchResults = useSelector((state) => Object.values(state.searchResults));
    return(
        <>
        <div className="search-show-bar">
        <div className="search-show-bar-input">
        <SearchBar/>
        </div>
        </div>
        <div className="restaurant-search-list-container">
            <div className="restaurant-search-list">
                {searchResults.length === 0 && 
                <div className="search-no-results">
                    <p className="search-no-results">No Results Found...</p>
                    </div>
                    }
                {searchResults.map(restaurant => (
                    <RestaurantSearchItem restaurant={restaurant}/>
                )
                    
                )}
            </div>
        </div>
        </>
    );
}
export default Search;