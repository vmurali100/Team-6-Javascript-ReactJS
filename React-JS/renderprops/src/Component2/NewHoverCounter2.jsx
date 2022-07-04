import React, { Component } from 'react'

export default class NewHoverCounter2 extends Component {
  render() {
    return (
      <div>
        <p>NewHoverCounter2</p>
        <h1 onMouseOver={this.props.incrementcounter}> hover {this.props.count} times</h1>
      </div>
    )
  }
}
