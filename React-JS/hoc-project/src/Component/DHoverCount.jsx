import React, { Component } from 'react'
import { DHOCComponent } from './DHOCComponent'

export class DHoverCount extends Component {
  render() {
    return (
      <div>
        <p>DHoverCount</p>
        <h2 onMouseOver={this.props.handleincrement}> hover count is:{this.props.count}</h2>
      </div>
    )
  }
}
export default DHOCComponent (DHoverCount)