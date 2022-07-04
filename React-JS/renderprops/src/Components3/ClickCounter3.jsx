import React, { Component } from 'react'

export default class ClickCounter3 extends Component {
   
  render() {
    return (
      <div>
        <p>ClickCounter3</p>
        <button onClick={this.props.IncrementCount}>Increment</button>
        <button onClick={this.props.DecrementCount}>Decrement</button>
        <h2>Clicked { this.props.count} many times</h2>
      </div>
    )
  }
}

