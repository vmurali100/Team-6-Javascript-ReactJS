import React, { Component } from 'react'
import { HOCComponents2 } from './HOCComponents2'

export class HoverCount2 extends Component {
    
  render() {
    return (
      <div>
        <p>HoverCount</p>
        
        <h2 onMouseOver={this.props.handleIncrement}>Hover Count is : {this.props.count}</h2>
      </div>
    )
  }
}

export default HOCComponents2(HoverCount2)
