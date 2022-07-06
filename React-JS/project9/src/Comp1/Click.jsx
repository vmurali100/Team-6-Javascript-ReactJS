import React, { Component } from 'react'
import { HOC } from './HOC'

  class Click extends Component {
     

  render() {
    return (
      <div>
        <p>Click</p>
        <button onClick={this.props.increase}>click</button>
        <h1>count value is:{this .props.count}</h1>
      </div>
    )
  }
}
export default HOC(Click)
