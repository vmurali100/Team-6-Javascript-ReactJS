import React, { Component } from 'react'
import { HOCcomponent2 } from './HOCcomponent2'

export  class Hovercount2 extends Component {
    
  render() {
    return (
      <div>
        <p>Hovercount2</p>
        <p onMouseOver={this.props.handleIncriment}>hover count is :{this.props.count}</p>
      </div>
    )
  }
}
export default HOCcomponent2(Hovercount2)
