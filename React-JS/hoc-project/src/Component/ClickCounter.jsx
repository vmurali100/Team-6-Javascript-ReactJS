import React, { Component } from 'react'
import { HOCComponent } from './HOCComponent'

class ClickCounter extends Component {
 
  render() {
    console.log(this.props)
    return (
      <div>
        <p>ClickCounter</p>
        <button onClick={this.props.handleIncrement}>click to increase the counte</button>
        <h2>the count is :{this.props.count}</h2>
      </div>
    )
  }
}
export default HOCComponent(ClickCounter)
