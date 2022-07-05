import React, { Component } from 'react'

export default class Clickcountcomp extends Component {
    
  render() {
    return (
      <div>
        <p>clickcountcomp</p>
        <h1 onClick={this.props.incrementcount}>clicked {this.props.count}</h1>
        
      </div>
    )
  }
}
