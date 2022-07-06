import React, { Component } from 'react'

export default class NewChildComp extends Component {
  render() {
    return (
      <div>
        <p>NewChildComp</p>
        <p>message from parent components is : {this.props.render}</p>
      </div>
    )
  }
}
