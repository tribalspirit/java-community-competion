import React, {Component} from "react"

class Header extends Component {
  constructor(){
    super();
    this.state = {
      by: 'Title'
    }
  }

  changeSearchBy(id) {
    this.setState({
      by: id
    })
    this.props.changeSearchByValue(id)
  }
  
  render() {
    return <div className='search-by'>
      <label className='search-by_label'>Search by</label>
      <button className={`search-by_type ${this.state.by === 'Title' ? 'active' : ''}`} onClick={this.changeSearchBy.bind(this, "Title")}>Title</button>
      <button className={`search-by_type ${this.state.by === "Genre" ? 'active' : ''}`} onClick={this.changeSearchBy.bind(this, "Genre")}>Genre</button>
    </div>
  }
}

export default Header;