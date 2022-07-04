import React, { Component } from 'react'

export default class Clickcount3 extends Component {
  render() {
    return (
      <div>
        <p>Clickcount3</p>
        <h1>clicked {this.props.count}</h1>
        <button onClick={this.props.increment}>increase</button>
        <button onClick={this.props.decrement}>decrease</button>
      </div>
    )
  }
}
