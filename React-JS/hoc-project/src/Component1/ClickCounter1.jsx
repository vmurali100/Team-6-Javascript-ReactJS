import React, { Component } from 'react'
import {HOCComponent1} from './HOCComponent1'

class ClickCounter1 extends Component {
  render() {
    return (
      <div>
        <p>ClickCounter1</p>
        <button onClick={this.props.handleIncrement}>click to increse the value</button>
        <h2>the count is :{this.props.count}</h2>
      </div>
    )
  }
}
export default HOCComponent1 (ClickCounter1)