import React, { Component } from 'react'

export default class Motivationalcount extends Component {
    componentWillUnmount(){
        console.log("componentwillunmount triggerd motivationalcount")
    }
  render() {
    return (
      <div>Motivationalcount</div>
    )
  }
}
