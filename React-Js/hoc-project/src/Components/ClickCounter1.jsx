import React, { Component } from 'react'
import { HOCComponents1 } from './HOCComponents1'

class ClickCounter1 extends Component {
    
  render() {
    return (
      <div>
        <p>ClickCounter1</p>
        <button onClick={this.props.handleIncrement}>Click To Increa Count</button>
        <h2>The Count is : {this.props.count}</h2>
      </div>
    )
  }
}


export default HOCComponents1(ClickCounter1)