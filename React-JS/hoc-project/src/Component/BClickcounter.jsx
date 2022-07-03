import React, { Component } from 'react'
import { BHOCComponente } from './BHOCComponente'

 class BClickcounter extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <p>BClickcounter</p>
        <button onClick={this.props.hadleincre}>click to increase the count</button>
        <h2>the count is:{this.props.count}</h2>
      </div>
    )
  }
}
export default BHOCComponente(BClickcounter)