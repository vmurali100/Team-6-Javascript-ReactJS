import React, { Component } from 'react'
import { HOCComponent3 } from './HOCComponent3'

export  class ClickCounter3 extends Component {
   

  render() {
    console.log(this.props)
    return (
      <div>
        <p>ClickCounter2</p>
        <button onClick={this.props.handleIncrement}>Click To Increase</button>
        <h2>The Count is:{this.props.count}</h2>
      </div>
    )
  }
}

export default HOCComponent3(ClickCounter3)
