import React, { Component } from 'react'

export default class NewClickCounter5 extends Component {
  render() {
    return (
      <div>
        <p>NewClickCounter5</p>
        <h2 onClick={this.props.incrementcounter}>click {this.props.count}</h2>
      </div>
    )
  }
}
