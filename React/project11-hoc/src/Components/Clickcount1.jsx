import React, { Component } from 'react'
import { HOCcomponent1 } from './HOCcomponent1'

export   class Clickcount1 extends Component {
  
  render() {
  
    return (
      <div>
        <p>Clickcount1</p>
        <button onClick={this.props.handleIncriment}>click to increase count</button>
        <p>The count is: {this.props.count}</p>
      </div>
    )
  }
}
export default HOCcomponent1(Clickcount1)

