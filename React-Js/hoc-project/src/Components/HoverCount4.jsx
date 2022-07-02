import React, { Component } from 'react'
import{HOCComponents4} from './HOCComponents4'

export class HoverCount4 extends Component {
    
  render() {
    return (
      <div>
        <p>HoverCount4</p>
        <h2 onMouseOver={this.props.handleIncrement}>Hover Count is : {this.props.count}</h2>
      </div>
    )
  }
}


export default HOCComponents4(HoverCount4)