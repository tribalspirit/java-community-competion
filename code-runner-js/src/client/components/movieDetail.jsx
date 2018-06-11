import React, {Component} from "react"
import SearchInput from "./searchInput"
import SearchBy from "./searchBy"

class Header extends Component {
  constructor() {
    super();
  }
  
  render() {
    return <div className='movie-detail-container'>
      <button className="search-button" onClick={this.props.backToSearch} >Search</button>
    </div>
  }
}

export default Header;