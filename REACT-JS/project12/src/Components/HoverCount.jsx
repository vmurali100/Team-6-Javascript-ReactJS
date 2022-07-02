import React, { Component } from 'react'
import HOCComponents from './HOCComponents'

export  class HoverCount extends Component {
    

  render() {
   console.log(this.props)

    return (
      <div>
        <p>HoverCount</p>
        <h2 onMouseOver={this.props.HandleIncremennt}>HoverCount is:{this.props.count}</h2>
      </div>
    )
  }
}

export default HOCComponents(HoverCount)
