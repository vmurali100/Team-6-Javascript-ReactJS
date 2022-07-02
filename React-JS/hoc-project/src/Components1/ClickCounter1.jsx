import React, { Component } from 'react'
import { HOCComponent1 } from './HOCComponent1'

export class ClickCounter1 extends Component {
   
  render() {
    console.log(this.props)
    return (
      <div>
        <p>ClickCounter1</p>
        <button onClick={this.props.handleIncrement}>Click To Increase Count</button>
        <h3>The Count is :{this.props.count}</h3>
      </div>
    )
  }
}

export default HOCComponent1(ClickCounter1)
