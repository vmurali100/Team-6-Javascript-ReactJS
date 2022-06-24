import React, { Component } from 'react'

export default class CountComp1and2 extends Component {
    componentWillUnmount(){
        console.log("componentWillUnmount Will Unmount Triggered")
    }
  render() {
    return (
      <div>
        <img src="./assets/nature.jpg" alt="" />
      </div>
    )
  }
}
