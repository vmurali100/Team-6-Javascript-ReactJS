import React, { Component } from 'react'
import { HOCComponent } from './HOCComponent'

export class HoverCount extends Component {
    
  render() {
    return (
      <div>
        <p>HoverCount</p>
        
        <h2 onMouseOver={this.props.handleIncrement}>Hover Count is : {this.props.count}</h2>
      </div>
    )
  }
}

export default HOCComponent(HoverCount)
