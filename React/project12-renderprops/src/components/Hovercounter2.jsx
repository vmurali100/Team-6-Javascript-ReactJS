import React, { Component } from 'react'

export default class Hovercounter2 extends Component {
  render() {
    return (
      <div>
        <p>Hovercounter2</p>
        <h3 onMouseOver={this.props.increase}>hovered{this.props.count}</h3>
      </div>
    )
  }
}
