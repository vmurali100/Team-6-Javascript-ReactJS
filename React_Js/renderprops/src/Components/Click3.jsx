import React, { Component } from 'react'

export default class Click3 extends Component {
  
  render() {
    return (
      <div>
        <p>Click3</p>
        <button onClick={this.props.increment}>Increment</button>
        <button onClick={this.props.decrement}>Decrement</button>
        <h2>Click {this.props.count} clicked</h2>
      </div>
    )
  }
}
