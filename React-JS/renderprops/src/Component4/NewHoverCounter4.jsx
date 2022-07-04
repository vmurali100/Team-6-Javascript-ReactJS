import React, { Component } from 'react'

export default class NewHoverCounter4 extends Component {
  render() {
    return (
      <div>
        <p>NewHoverCounter4</p>
        <h2 onMouseOver={this.props.incrementfun}>hover{this.props.count} times</h2>
      </div>
      
    )
  }
}
