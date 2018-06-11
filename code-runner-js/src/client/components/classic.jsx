import React, {Component} from "react"

class Classic extends Component {
  render() {
    return <h2>This is a {this.props.componentType} component</h2>;
  }
}

export default Classic;