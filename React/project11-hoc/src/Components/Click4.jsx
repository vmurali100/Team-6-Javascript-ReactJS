import React, { Component } from 'react'
import HOC4 from './HOC4'

 export class Click4 extends Component {
  render() {
    return (
      <div>
        <p>Click4</p>
        <button onClick={this.props.handleIncrement}>click to increase</button>
        <h1>click to increase:{this.props.count}</h1>
      </div>
    )
  }
}
export default HOC4(Click4)