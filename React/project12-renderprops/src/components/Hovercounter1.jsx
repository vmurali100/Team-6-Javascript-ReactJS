import React, { Component } from 'react'

export default class Hovercounter1 extends Component {
  render() {
    return (
      <div>
        <p>Hovercounter1</p>
        <h2 onMouseOver={this.props.increaseCount}>hovered {this.props.count} times</h2>
      </div>
    )
  }
}
