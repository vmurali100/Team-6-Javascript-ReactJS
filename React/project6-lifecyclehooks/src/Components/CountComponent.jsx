import React, { Component } from 'react'

export default class CountComponent extends Component {
  componentWillUnmount(){
    console.log("componentWillUnmount CountComponent triggered")
  }
  render() {
  
    return (
      <div>CountComponentt</div>
    )
  }
}
