import React, { Component } from 'react'

export default class NewClickCounter extends Component {
   
  render() {
    return (
      <div>
        <p>NewClickCounter</p>
        <button onClick={this.props.incrementCount}>Increment</button>
        <button onClick={this.props.decrementCount}>Decrement</button>
        <h2 >Clicked {this.props.count} many times</h2>
      </div>
    )
  }
}
