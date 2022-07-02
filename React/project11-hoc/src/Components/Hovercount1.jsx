import React,{Component}  from 'react'
import { HOCcomponent1 } from './HOCcomponent1'

export class Hovercount1 extends Component {
   
  render() {
    return (
      <div>
        <p>Hovercount1</p>
        <h2 onMouseOver={this.props.handleIncriment}>on hover count is:{this.props.count}</h2>
      </div>
    )
  }
}
export default HOCcomponent1(Hovercount1)