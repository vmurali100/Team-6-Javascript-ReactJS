import React, { Component } from 'react'

export default class Clickcounter1 extends Component {
  render() {
    return (
      <div>
        <p>Clickcounter1</p>
        <h1>clicked {this.props.count} times</h1>
        <button onClick={this.props.increaseCount}>increase</button>
        <button onClick={this.props.decreasecount}>decrease</button>
  
      
      </div>
    )
  }
}
