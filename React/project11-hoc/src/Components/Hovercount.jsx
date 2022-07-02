import React, { Component } from 'react'
import { HOCcomponent } from './HOCcomponent'

export class Hovercount extends Component {
   
  render() {
  
    return (
      <div>
        <p>Hovercount</p>
    
        <h2  onMouseOver={this.props.handleIncrement}>The Hover count is : {this.props.count}</h2>
      </div>
    )
  }
}
 export default HOCcomponent(Hovercount)