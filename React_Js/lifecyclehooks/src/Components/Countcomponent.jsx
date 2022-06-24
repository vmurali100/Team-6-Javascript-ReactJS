import React, { Component } from 'react'

export default class Countcomponent extends Component {
    componentWillUnmount(){
        console.log("componentWillUnmount")
    }
  render() {
    return (
      <div>
        Countcomponent
      </div>
    )
  }
}
