import React, { Component } from 'react'

export default class Hovercounter4 extends Component {
  render() {
    return (
      <div>
        <p>Hovercounter4</p>
        <h1 onMouseOver={this.props.increase} onMouseOut={this.props.decrease}>hovered {this.props.count}</h1>
      </div>
    )
  }
}
