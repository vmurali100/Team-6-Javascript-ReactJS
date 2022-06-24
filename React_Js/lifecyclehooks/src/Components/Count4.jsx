import React, { Component } from 'react'

export default class Count4 extends Component {
    componentWillUnmount(){
        console.log("componentWillUnmount triggered")
    }
  render() {
    return (
      <div>
        Count4
      </div>
    )
  }
}
