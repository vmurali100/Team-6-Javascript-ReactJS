import React, { Component } from 'react'
import Hoc from './Hoc'

export class Hover extends Component {
    
  render() {
    console.log(this.props)
    return (
      <div>
        <p>hover</p>
        <h2 onMouseOver={this.props.handleHover}>Hover count :{this.props.count}</h2>
      </div>
    )
  }
}
export default Hoc(Hover)