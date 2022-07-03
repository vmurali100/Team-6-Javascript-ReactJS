import React, { Component } from 'react'
import {CHOCComponente} from './CHOCComponente'

class CClickcounter extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <p>CClickcounter</p>
        <button onClick={this.props.hadleinc}>click to increase the counte</button>
        <h2>the count is:{this.props.count}</h2>
      </div>
    )
  }
}
export default CHOCComponente(CClickcounter)
