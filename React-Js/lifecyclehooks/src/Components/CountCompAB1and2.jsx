import React, { Component } from 'react'

export default class CountCompAB1and2 extends Component {
    componentWillUnmount(){
        console.log("componentWillUnmount Will Unmount Triggered")
    }
  render() {
    return (
      <div>
        <p>Count Component AB1 and 2</p>
      </div>
    )
  }
}
