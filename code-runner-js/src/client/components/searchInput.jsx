import React, {Component} from "react"

class Header extends Component {  
  render() {
    return <div className='search-input'>
      <label className='search-input_label'>Find your movie</label>
      <input className='search-input_field' onChange={e => this.props.searchInputChange(e.target.value)}/>
    </div>
  }
}

export default Header;