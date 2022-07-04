import React, { Component } from 'react'

export default class NewClickCounter1 extends Component {

  render() {
    return (
      <div>
        <p>NewClickCounter1</p>
        <h1 onClick={this.props.IncrementCounter}>clicked{this.props.count} many times</h1>
        <button onClick={this.props.IncrementCounter}>Increment</button>
        <button onClick={this.props.ReductionCounter}>Reduction</button>
      </div>
    )
  }
}
