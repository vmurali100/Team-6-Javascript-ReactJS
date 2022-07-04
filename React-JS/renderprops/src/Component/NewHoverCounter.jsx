import React, { Component } from 'react'

export default class NewHoverCounter extends Component {
   
  render() {
    return (
      <div>
        <p>NewHoverCounter</p>
        <h2 onMouseOver={this.props.incrementcounter} 
        onMouseOut={this.props.reductioncounter}>Hover{this.props.count} times</h2>
      </div>
    )
  }
}
