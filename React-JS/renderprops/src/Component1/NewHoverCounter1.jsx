import React, { Component } from 'react'

export default class NewHoverCounter1 extends Component {
  render() {
    return (
      <div>
        <p>NewHoverCounter1</p>
        <h1 onMouseOver={this.props.IncrementCounter} onMouseOut={this.ReductionCounter}>hover here it will get increase{this.props.count}</h1>
      </div>
    )
  }
}
