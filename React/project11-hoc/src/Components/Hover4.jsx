import React, { Component } from 'react'
import HOC4 from './HOC4'

 export class Hover4 extends Component {
  render() {
    return (
      <div>
        <p>Hover4</p>
        <h3 onMouseOver={this.props.handleIncrement}>hover count is:{this.props.count}</h3>
      </div>
    )
  }
}
export default HOC4(Hover4)
