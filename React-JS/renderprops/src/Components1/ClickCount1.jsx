import React, { Component } from 'react'

export default class ClickCount1 extends Component {
  render() {
    return (
      <div>
        <p>ClickCount1</p>
          <button onClick={this.props.incrementCount}>Increment</button>
          <button onClick={this.props.decrementCount}>Decrement</button>
          <h2>Cliked {this.props.count} ManyTimes</h2>
      </div>
    )
  }
}
