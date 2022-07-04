import React, { Component } from 'react'

export default class NewHovercounter3 extends Component {
    
  render() {
    return (
      <div>
        <p>NewHoverCounter3</p>
        <h2 onMouseOver={this.props.incrementCount} onMouseOut={this.props.decrementCount}>Hover {this.props.count} Time</h2>
      </div>
    )
  }
}
