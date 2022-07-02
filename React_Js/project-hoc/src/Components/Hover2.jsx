import React, { Component } from 'react'
import Hoccom2 from './Hoccom2'

 class Hover2 extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <p>Hover2</p>
        <h2 onMouseOver={this.props.increment2}>hover increment2 : {this.props.count}</h2>
      </div>
    )
  }
}
export default Hoccom2(Hover2)