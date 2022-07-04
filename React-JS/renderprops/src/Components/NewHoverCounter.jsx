import React, { Component } from 'react'

export default class NewHoverCounter extends Component {
    
  render() {
    return (
      <div>
        <p>NewHoverCounter</p>
        <button onMouseOver={this.props.incrementCount}>Hovered  </button>
        <button onMouseOut={this.props.decrementCount}>HoverOut </button>
        <h2 >Hovered {this.props.count} times</h2>
        {/* <h2 onMouseOver={this.props.incrementCount} onMouseOut={this.props.decrementCount}>Hovered {this.props.count} times</h2> */}
      </div>
    )
  }
}
