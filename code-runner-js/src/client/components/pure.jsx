import React, {PureComponent} from "react"

class Pure extends PureComponent {
  render() {
    return <h2>This is a {this.props.componentType} component</h2>;
  }
}

export default Pure;