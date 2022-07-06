import React, { Component } from 'react'
import { HOC } from './HOC'

class ClickCounter extends Component {
    
  render() {
    return (
      <div>
        <p>ClickCounter</p>
        <button onClick={this.props.IncrementCount}>Click To Increments Count</button>
        <h1>The Count is:{this.props.count}</h1>
      </div>
    )
  }
}
export default HOC(ClickCounter)