import React, { Component } from 'react'
import { HOCComponent1 } from './HOCComponent1'

export  class HoverCount1 extends Component {
   
  render() {
    console.log(this.props)
    return (
      <div>
        <p>HoverCount1</p>
        <h3 onMouseOver={this.props.handleIncrement}>Hover Count is:{this.props.count}</h3>
      </div>
    )
  }
}

export default HOCComponent1(HoverCount1)
