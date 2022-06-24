import React, { Component } from 'react'

export default class Count2 extends Component {
    componentWillUnmount(){
        console.log("componentWillUnmount triggeered in count2")
    }
  render() {
    return (
      <div>
        Count2
      </div>
    )
  }
}
