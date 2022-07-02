import React, { Component } from 'react'
import { HOCComponent3 } from './HOCComponent3'

export  class HoverCount3 extends Component {
   
  render() {
    console.log(this.props)
    return (
      <div>
        <p>HoverCount3</p>
        <h2 onMouseOver={this.props.handleIncrement}>The Count Is :{this.props.count}</h2>
      </div>
    )
  }
}
export default HOCComponent3(HoverCount3)
