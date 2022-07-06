import React, { Component } from 'react'
import { HOC } from './HOC'

 class HoverCounter extends Component {
     
  render() {
    return (
      <div>
        <p>HoverCounter</p>
        <h2 onMouseOver={this.props.IncrementCount}>Hover Count is:{this.props.count} Times</h2>
      </div>
    )
  }
}
export default HOC(HoverCounter)
