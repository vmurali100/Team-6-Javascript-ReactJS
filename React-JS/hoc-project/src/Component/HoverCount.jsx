import React, { Component } from 'react'
import { HOCComponent } from './HOCComponent'

export class HoverCount extends Component {
  render() {
    return (
     <div>
         <div>HoverCount</div>
      <h2 onMouseOver={this.props.handleIncrement}> hover count is:{this.props.count}</h2>
     </div>
    )
  }
}
export default HOCComponent (HoverCount)
