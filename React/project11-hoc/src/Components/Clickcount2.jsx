import React, { Component } from 'react'
import { HOCcomponent2 } from './HOCcomponent2'

export  class Clickcount2 extends Component {
  
  render() {
    return (
      <div>
        <p>Clickcount2</p>
        <h1>The count is:{this.props.count}</h1>
        <button onClick={this.props.handleIncriment}>click to increase</button>
        
      </div>
    )
  }
}
export default HOCcomponent2(Clickcount2)