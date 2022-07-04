import React, { Component } from 'react'

export default class Hover5 extends Component {
  
  render() {
    return (
      <div>
        <p>Hover5</p>
        <h2 onMouseOver={this.props.increment}>Hover {this.props.count} hovered</h2>
      </div>
    )
  }
}
