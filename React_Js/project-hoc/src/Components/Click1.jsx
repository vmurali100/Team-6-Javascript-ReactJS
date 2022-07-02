import React, { Component } from 'react'
import Hoccom1 from './Hoccom1'

 class Click1 extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <p>Click1</p>
        <button onClick={this.props.increment1}>click to increment</button>
        <h2>count is : {this.props.count}</h2>
      </div>
    )
  }
}
export default Hoccom1(Click1)
