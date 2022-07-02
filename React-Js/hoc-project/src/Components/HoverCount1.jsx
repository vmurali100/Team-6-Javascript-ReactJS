import React, { Component } from 'react'
import { HOCComponents1 } from './HOCComponents1'

export class HoverCount1 extends Component {
    
  render() {
    return (
      <div>
        <p>HoverCount1</p>
        <h2 onMouseOver={this.props.handleIncrement}>Hover Count is: {this.props.count}</h2>
      </div>
    )
  }
}


export default HOCComponents1(HoverCount1)