import React, { Component } from 'react'

export default class Hovercounter3 extends Component {
  render() {
    return (
      <div>
        <p>Hovercounter3</p>
        <h4 onMouseOver={this.props.increment}>hovered {this.props.count} times</h4>
      </div>
    )
  }
}
