import React, { Component } from 'react'

export default class NewHoverCounter extends Component {

  render() {
    return (
      <div>
        <p>NewHoverCounter</p>
        <button onMouseOver={this.props.Incrementcount}>Increments</button>
        <button onMouseOut={this.props.DecrementCount}>Decrements</button>
        <h1>Hovered {this.props.count} times</h1>
      </div>
    )
  }
}
