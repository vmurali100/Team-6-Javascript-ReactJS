import React, { Component } from 'react'

export default class CountComponents extends Component {
    componentWillUnmount(){
        console.log("componentWillUnmount Triggered")
    }
  render() {
    return (
      <div>CountComponents</div>
    )
  }
}
