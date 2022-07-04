import React, { Component } from 'react'

export default class NewHoverCounter3 extends Component {
  render() {
    return (
      <div>
        <p>NewHoverCounter3</p>
        <h2 onMouseOver={this.props.incrementfun} onMouseOut={this.props.reductionfun}>Hover {this.props.count} times</h2>
      </div>
    )
  }
}
