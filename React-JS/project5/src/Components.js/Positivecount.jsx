import React, { Component } from 'react'

export default class Positivecount extends Component {
    componentWillUnmount(){
        console.log("componentWillUnmount triggerd by positivecount")
    }
  render() {
    return (
      <div>Positivecount</div>
    )
  }
}
