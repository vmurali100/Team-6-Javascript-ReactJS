import React, { Component } from 'react'
import Hoccomponent from './Hoccomponent'

 export class Hovercounter extends Component {
    
  render() {
    console.log(this.props)
    return (
      <div>
        <p>Hovercount</p>
        <h2 onMouseOver={this.props.handlehoverincrement}>Hover count is :{this.props.count}</h2>
      </div>
    )
  }
}
export default Hoccomponent(Hovercounter)
