import React, { Component } from 'react'
import { HOC } from './HOC'

export  class Click extends Component {
   
  render() {
    return (
      <div>
        <h1>click</h1>
        <button onClick={this.props.countincreament}>click</button>
        <h2 >count value is : {this.props.count}</h2>

      </div>
    )
  }
}
export default HOC(Click)
