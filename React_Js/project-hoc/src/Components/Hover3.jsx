import React, { Component } from 'react'
import Hoccom3 from './Hoccom3'

 class Hover3 extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <p>Hover3</p>
        <h2 onMouseOver={this.props.increment3}>hover increment3 : {this.props.count}</h2>
      </div>
    )
  }
}
export default Hoccom3(Hover3)
