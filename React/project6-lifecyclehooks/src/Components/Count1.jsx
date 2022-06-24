import React, { Component } from 'react'

export default class Count1 extends Component {
    componentWillUnmount(){
        console.log("componentWillUnmount triggered Count1")
    }
  render() {
    return (
      <div>Count1</div>
    )
  }
}
