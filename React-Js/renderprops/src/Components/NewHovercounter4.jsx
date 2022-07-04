import React, { Component } from 'react'

export default class NewHovercounter4 extends Component {
    
  render() {
    return (
      <div>
        <p>NewHoverCounter4</p>
        <h2 onMouseOver={this.props.incrementCount} onMouseOut={this.props.decrementCount}>Hover {this.props.count} Time</h2>
      </div>
    )
  }
}
