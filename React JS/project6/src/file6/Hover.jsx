import React, { Component } from 'react'
import { HOC } from './HOC'

export  class Hover extends Component {
    
  render() {
    return (
      <div>
        <h1>hover</h1>
        <h2 onMouseOver={this.props.countincreament}> count: {this.props.count}</h2>
      </div>
    )
  }
}
export default HOC(Hover)

