import React, { Component } from 'react'
import { HOCComponents2 } from './HOCComponents2'

export class ClickCounter2 extends Component {
    
  render() {
    return (
      <div>
        <p>ClickCounter2</p>
        <button onClick={this.props.handleIncrement}>Click To Increase Count</button>
        <h2>The Count is : {this.props.count}</h2>
      </div>
    )
  }
}

export default HOCComponents2(ClickCounter2)