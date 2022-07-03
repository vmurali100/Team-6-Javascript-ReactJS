import React, { Component } from 'react'
import { AHOCComponent } from './AHOCComponent'

export class AHoverCount extends Component {
  render() {
    return (
      <div>
        <p>AHoverCount</p>
        <h2 onMouseOver={this.props.handleIncre}> hover count is:{this.props.count} </h2>
      </div>
    )
  }
}
export default AHOCComponent(AHoverCount)