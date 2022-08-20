import React, { Component } from 'react'
import Hoc from './Hoc'

export class Click extends Component {
    
  render() {
    return (
      <div>
        <p>Click</p>
        <button onClick={this.props.handleChange}>click to increment</button>
        <h2>this is count :{this.props.count}</h2>
      </div>
    )
  }
}
export default Hoc(Click)