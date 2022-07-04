import React, { Component } from 'react'

export default class NewClickCounter4 extends Component {
  render() {
    return (
      <div>
        <p>NewClickCounter4</p>
        <h2 onClick={this.props.incrementfun}>clicked{this.props.count}many times</h2>
      </div>
    )
  }
}
