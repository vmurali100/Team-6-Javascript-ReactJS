import React, { Component } from 'react'

export default class NewHoverCounter5 extends Component {
  render() {
    return (
      <div>
        <p>NewHoverCounter5</p>
        <h2 onMouseOver={this.props.incrementcounter}>hover {this.props.count} times</h2>
      </div>
    )
  }
}
