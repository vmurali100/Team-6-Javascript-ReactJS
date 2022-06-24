import React, { Component } from 'react'

export default class Count3 extends Component {
    componentWillUnmount(){
        console.log("componentWillUnmount triggered in Count3")
    }
  render() {
    return (
      <div>
        <p>Count3</p>
      </div>
    )
  }
}
