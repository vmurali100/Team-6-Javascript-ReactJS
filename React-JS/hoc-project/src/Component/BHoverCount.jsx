import React, { Component } from 'react'
import { BHOCComponente } from './BHOCComponente'

export class BHoverCount extends Component {
  render() {
    return (
      <div>
        <p>BHoverCount</p>
        <h2 onMouseOver={this.props.hadleincre}>hover count is:{this.props.count}</h2>
      </div>
    )
  }
}
export default BHOCComponente (BHoverCount)