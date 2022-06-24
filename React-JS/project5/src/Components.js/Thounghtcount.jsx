import React, { Component } from 'react'

export default class Thounghtcount extends Component {
    componentWillUnmount(){
        console.log("componentWillUnmount triggerd by Thounghtcount ")
    }
  render() {
    return (
      <div>Thounghtcount</div>
    )
  }
}
