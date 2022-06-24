import React, { Component } from 'react'

export default class Countcomponent extends Component {
    componentWillUnmount(){
        console.log("componentwillunmount trigged")
    }
  render() {
    return (
      <div>Countcomponent</div>
    )
  }
}

