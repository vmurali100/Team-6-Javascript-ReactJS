import React, { Component } from 'react'

export default class Count2 extends Component {
    componentWillUnmount(){
        console.log("componentWillUnmount triggered in Count3and4")
    }
  render() {
    return (
      <div>Count2</div>
    )
  }
}
