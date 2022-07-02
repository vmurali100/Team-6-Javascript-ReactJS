import React, { Component } from 'react'
import Hoccom2 from './Hoccom2'

 class Click2 extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <p>Click2</p>
        <button onClick={this.props.increment2}>to increment2</button>
        <h2>count : {this.props.count}</h2>
      </div>
    )
  }
}
export default Hoccom2(Click2)