import React, { Component } from 'react'

export default class NewHoverCounter1 extends Component {
    
  render() {
    return (
      <div>
        <p>NewHoverCounter1</p>
        <h2 onMouseOver={this.props.incrementCount} onMouseOut={this.props.decrementCount}>Hover {this.props.count} Time</h2>
      </div>
    )
  }
}
