import React, { Component } from 'react'

export default class CountCompnentA extends Component {
    componentWillUnmount(){
        console.log("componentWillUnmount Triggered")
    }
  render() {
    return (
      <div>
        <img src="./assets/flower.jpeg" alt="" />
      </div>
    )
  }
}
