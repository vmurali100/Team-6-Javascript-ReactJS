import React, { Component } from 'react'

export default class CountComponentAB extends Component {
    componentWillUnmount(){
        console.log("componentWillUnmount Triggered")
    }
  render() {
    return (
      <div>CountComponentAB</div>
    )
  }
}

