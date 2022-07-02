import React, { Component } from 'react'
import { HOCComponents3 } from './HOCComponents3'

export class ClickCounter3 extends Component {
    
  render() {
    return (
      <div>
        <p>ClickCounter3</p>
        <button onClick={this.props.handleIncrement}>Click To Increase Count</button>
        
        <h2>The Count is:{this.props.count}</h2>
      </div>
    )
  }
}

export default HOCComponents3(ClickCounter3)