import { useDispatch } from "react-redux";
import "./ReservationSearch.css"
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { fetchSearchResults } from "../../store/search";

const SearchBar = () => {

  const dispatch = useDispatch();
  const history = useHistory();
  const [searchText, setSearchText] = useState("");

  async function handleSearch(e) {
    e.preventDefault();
    const query = e.target.value;
    await setSearchText(query);
  }
  
  function handleSearchSubmit(e) {
    e.preventDefault();
    if (searchText.length > 0) {
      history.push(`/search?restaurants=${searchText}`)
      dispatch(fetchSearchResults(searchText))
    }
  }

  return (
    <div className="search-bar">
      <input className="search-input" onChange={handleSearch} type="text" placeholder="Location, Restaurant or Cuisine"></input>
      <button onClick={handleSearchSubmit}className="submit-search-btn">Let's Go</button>
    </div>
  )
}

export default SearchBar