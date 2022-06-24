import React, { Component } from 'react'

export default class Count3 extends Component {
    componentWillUnmount(){
        console.log("componentWillUnmount")
    }
  render() {
    return (
      <div>
        Count3
      </div>
    )
  }
}
