import React, { Component } from 'react'

export default class Clickcount4 extends Component {
  render() {
    return (
      <div>
        <p>Clickcount4</p>
        <h1>clicked {this.props.count} times</h1>
        <button onClick={this.props.increase}>increase</button>
        <button onClick={this.props.decrease}>decrease</button>
      </div>
    )
  }
}
