import React, { Component } from 'react'
import { HOCcomponent } from './HOCcomponent'

  class Clickcounter extends Component {
   
  render() {
    console.log(this.props)
    return (
      <div>
        <p>Clickcounter</p>
        <button onClick={this.props.handleIncrement}>click to increase count</button>
        <h2>The count is: {this.props.count}</h2>
      </div>
    )
  }
}
export default HOCcomponent(Clickcounter)
