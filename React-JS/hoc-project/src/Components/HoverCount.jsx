import React, { Component } from 'react'
import { HOCComponent } from './HOCComponent'

export  class HoverCount extends Component {
   
  render() {
    console.log(this.props)
    return (
      <div>
        <p>HoverCount</p>
        <h2 onMouseOver={this.props.handleIncrement}>Hover Count is :{this.props.Count}</h2>
      </div>
    )
  }
}

export default HOCComponent(HoverCount)
