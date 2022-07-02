import React, { Component } from 'react'
import { HOCComponents4 } from './HOCComponents4'

export class ClickCounter4 extends Component {
    
  render() {
    return (
      <div>
        <p>ClickCounter4</p>
        <button onClick={this.props.handleIncrement}>Click To Increase Count</button>
        
        <h2>The Count is : {this.props.count}</h2>
      </div>
    )
  }
}

export default HOCComponents4(ClickCounter4)