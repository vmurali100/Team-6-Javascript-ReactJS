import React, { Component } from 'react'
import  HOCcomponent3  from './HOCcomponent3'


export class Clickcount3 extends Component {

  render() {
    console.log(this.props)
    return (
      <div>
        <p>Clickcount3</p>
        <button onClick={this.props.handleIncriment3}>clicl to change</button>
        <h1>count is:{this.props.count}</h1>
      </div>
    )
  }
}
export default HOCcomponent3(Clickcount3)