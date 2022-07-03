import React, { Component } from 'react'
import {HOCComponent1} from './HOCComponent1'

export class HoverCounter1 extends Component {
  render() {
    return (
      <div>
        <p>HoverCounter1</p>
        <h2 onMouseOver={this.props.handleIncrement}> hover here value is increse:{this.props.count}</h2>
      </div>
    )
  }
}
export default HOCComponent1 (HoverCounter1)
