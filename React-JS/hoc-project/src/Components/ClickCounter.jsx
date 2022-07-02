import React, { Component } from 'react'
import { HOCComponent } from './HOCComponent'

 class ClickCounter extends Component {
      
  render() {
    console.log(this.props) 
    return (
      <div>
        <p>ClickCounter</p>
        <button onClick={this.props.handleIncrement}>click To Increase Count</button>
        <h3>The Count is :{this.props.Count}</h3>
      </div>
    )
  }
}

export default HOCComponent(ClickCounter)
