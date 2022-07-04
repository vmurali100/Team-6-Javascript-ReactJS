import React, { Component } from 'react'

export default class Hover2 extends Component {
   
  render() {
    return (
      <div>
        <p>Hover2</p>
        <h2 onMouseOver={this.props.increment}>Hover {this.props.count} hovered</h2>
      </div>
    )
  }
}
