import React, { Component } from 'react'
import {CHOCComponente} from './CHOCComponente'

export class CHoverCount extends Component {
  render() {
    return (
     <div>
         <div>CHoverCount</div>
      <h2 onMouseOver={this.props.hadleinc}>hover count is:{this.props.count}</h2>
     </div>
    )
  }
}
export default CHOCComponente(CHoverCount)
