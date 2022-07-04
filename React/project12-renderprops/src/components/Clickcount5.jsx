import React, { Component } from 'react'

export default class Clickcount5 extends Component {
  render() {
    return (
      <div>
        <p>Clickcount5</p>
        <h1>clicked {this.props.count} times</h1>
        <button onClick={this.props.increment}>increase</button>
        <button onClick={this.props.decrement}>decrease</button>
      </div>
    )
  }
}
