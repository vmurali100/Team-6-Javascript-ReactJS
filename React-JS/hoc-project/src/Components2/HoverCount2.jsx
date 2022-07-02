import React, { Component } from 'react'
import { HOCComponent2 } from './HOCComponent2'

export  class HoverCount2 extends Component {
   
  render() {
    console.log(this.props)
    return (
      <div>
        <p>HoverCount2</p>
        <h2 onMouseOver={this.props.handleIncrement}>The count is:{this.props.count}</h2>
      </div>
    )
  }
}
export default HOCComponent2(HoverCount2)
