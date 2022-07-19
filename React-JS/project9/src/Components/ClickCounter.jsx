import React, { Component } from 'react'
import { HOCComponents } from './HOCComponents'

class ClickCounter extends Component {
    
  render() {
    console.log(this.props)
    return (
      <div>
        <p>ClickCounter</p>
        <button onClick={this.props.HandleIncrements}>Click To Increase Count</button>
        <h2>The Count is:{this.props.count}</h2>
      </div>
    )
  }
}
export default HOCComponents(ClickCounter) 