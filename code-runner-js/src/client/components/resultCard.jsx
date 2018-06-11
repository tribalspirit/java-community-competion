import React, {Component} from "react"
import Image from "./image"

class Header extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.onClickHandler(this.props.data.id)
  }
  
  render() {
    return <div className='result-card-container'>
      <div className='result-card' onClick={this.handleClick}>
        <Image className='result-card-img' src={this.props.data.poster_path} />
      </div>
    </div>
  }
}

export default Header;