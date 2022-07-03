import React, { Component } from 'react'
import { DHOCComponent } from './DHOCComponent'

class DClickCount extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <p>DClickCount</p>
        <button onClick={this.props.handleincrement}>click to increase the counte</button>
        <h2>the count is:{this.props.count}</h2>
      </div>
    )
  }
}
export default DHOCComponent(DClickCount)