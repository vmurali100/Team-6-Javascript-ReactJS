import React, { Component } from 'react'

export default class NewChildComp extends Component {
  render() {
    return (
      <div>
        <p>NewChildComp</p>
        <p>Message from Parent Component is : {this.props.Sai}</p>
      </div>
    )
  }
}
