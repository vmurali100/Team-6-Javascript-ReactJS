import React, { Component } from 'react'

export default class NewHovercounter extends Component {
    
  render() {
    return (
      <div>
        <p>NewHovercounter</p>
        <h2 onMouseOver={this.props.inCrementCount} onMouseOut={this.props.decrementCount}>Hover {this.props.count} Times</h2>
      </div>
    )
  }
}
