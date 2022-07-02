import React, { Component } from 'react'
import { HOCComponent2 } from './HOCComponent2'

export  class ClickCounter2 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0,
      }
    }
   
  render() {
    return (
      <div>
        <p>ClickCounter2</p>
        <button onClick={this.props.handleIncrement}>Click to Increase Count</button>
        <h2>The Count is:{this.props.count}</h2>
      </div>
    )
  }
}

export default HOCComponent2(ClickCounter2)
