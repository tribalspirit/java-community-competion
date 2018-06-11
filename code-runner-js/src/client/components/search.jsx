import React, {Component} from "react"
import SearchInput from "./searchInput"
import SearchBy from "./searchBy"

class Search extends Component {
  constructor() {
    super();
    this.searchInputValue = "";
    this.searchInputType = "Title";
  }
  
  render() {
    return <div className='search-container'>
      <SearchInput searchInputChange={(inputValue) => this.searchInputValue = inputValue}/>
      <SearchBy changeSearchByValue={(type) => this.searchInputType = type}/>
      <button className="search-button" onClick={() => this.props.search(this.searchInputValue, this.searchInputType)} >Search</button>
    </div>
  }
}

export default Search;