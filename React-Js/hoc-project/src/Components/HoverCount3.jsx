import React, { Component } from 'react'
import{HOCComponents3} from './HOCComponents3'

export class HoverCount3 extends Component {
    
  render() {
    return (
      <div>
        <p>HoverCount3</p>
        <h2 onMouseOver={this.props.handleIncrement}>Hover Count is : {this.props.count}</h2>
      </div>
    )
  }
}


export default HOCComponents3(HoverCount3)