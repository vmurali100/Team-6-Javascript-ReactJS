import React, { Component } from 'react'
import Hoccom from './Hoccom'

 class Hover extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <p>Hover</p>
        <h2 onMouseOver={this.props.increment}>hover to increament the count is : {this.props.count}</h2>
      </div>
    )
  }
}
export default Hoccom(Hover)




