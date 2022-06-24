import React, { Component } from 'react'

export default class CountCompnent1 extends Component {
    componentWillUnmount(){
        console.log("componentWillUnmount Triggered")
    }
  render() {
    return (
      <div>
        CountComponent
      </div>
    )
  }
}
