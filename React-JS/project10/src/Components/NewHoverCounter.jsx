import React, { Component } from 'react'

export default class NewHoverCounter extends Component {
     
  render() {
    return (
      <div>
        <p>NewHoverCounter</p>
        <h1 onMouseOver={this.props.Incrementcount} onMouseOut={this.props.DecrementCount}>Hovered {this.props.count} times</h1>
      </div>
    )
  }
}
