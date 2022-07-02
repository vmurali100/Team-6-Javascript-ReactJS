import React, { Component } from 'react'
import Hoccom from './Hoccom'

 class Click extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <p>Click</p>
        <button onClick={this.props.increment}>click to increment the count value</button>
        <h2>count is : {this.props.count}</h2>
      </div>
    )
  }
}
export default Hoccom(Click)