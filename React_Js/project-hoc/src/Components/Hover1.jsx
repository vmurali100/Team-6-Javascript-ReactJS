import React, { Component } from 'react'
import Hoccom1 from './Hoccom1'

 class Hover1 extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <p>Hover1</p>
        <h2 onMouseOver={this.props.increment1}>hover to increament : {this.props.count}</h2>
      </div>
    )
  }
}
export default Hoccom1(Hover1)