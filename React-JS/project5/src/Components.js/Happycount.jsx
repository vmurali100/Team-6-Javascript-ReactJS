import React, { Component } from 'react'

export default class Happycount extends Component {
    componentWillUnmount(){
        console.log("componentwillunmount triggerd")
    }
  render() {
    return (
      <div>Happycount</div>
    )
  }
}
