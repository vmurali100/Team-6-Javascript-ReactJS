import React, { Component } from 'react'

export default class Kindcount extends Component {
    componentWillUnmount(){
        console.log("componentwillunmount triggerd Kindcount")
    }
  render() {
    return (
      <div>Kindcount</div>
    )
  }
}
