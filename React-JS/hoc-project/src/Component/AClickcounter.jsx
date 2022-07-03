import React, { Component } from 'react'
import { AHOCComponent } from './AHOCComponent'

class AClickcounter extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <p>AClickcounter</p>
        <button onClick={this.props.handleIncre}>click to increase the counte</button>
        <h2>the coun is :{this.props.count}</h2>
      </div>
    )
  }
}
export default AHOCComponent(AClickcounter)