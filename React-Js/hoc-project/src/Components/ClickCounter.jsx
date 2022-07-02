import React, { Component } from 'react'
import { HOCComponent } from './HOCComponent'

class ClickCounter extends Component {
    
  render() {
    
    return (
      <div>
        <p>ClickCounter</p>
        <button onClick={this.props.handleIncrement}>Click to Increase Count</button>

        <h2>The Count is : {this.props.count}</h2>
      </div>
    )
  }
}


export default HOCComponent(ClickCounter)