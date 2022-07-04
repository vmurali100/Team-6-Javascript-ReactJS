import React, { Component } from 'react'

export default class Hovercounter5 extends Component {
  render() {
    return (
      <div>
        <p>Hovercounter5</p>
        <h1 onMouseOver={this.props.increment}>hovered {this.props.count} times</h1>
      </div>
    )
  }
}
