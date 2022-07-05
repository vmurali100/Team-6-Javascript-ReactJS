import React, { Component } from 'react'
import { Page } from './Page'

export  class Page1 extends Component {
  render() {
    return (
      <div>
        <h1>click</h1>
        <h2 onClick={this.props.increase}> co: {this.props.count}</h2>
      </div>
    )
  }
}
export default Page(Page1)
