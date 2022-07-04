import React, { Component } from 'react'

export default class Hover1 extends Component {
    
  render() {
    return (
      <div>
        <p>Hover1</p>
        <h2 onMouseOver={this.props.increment}>Hover {this.props.count} hovered</h2>
      </div>
    )
  }
}
