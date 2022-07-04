import React, { Component } from 'react'

export default class NewClickCounter3 extends Component {

  render() {
    return (
      <div>
        <p>NewClickCounter3</p>
       <h2 onClick={this.props.incrementfun}> clicked {this.props.count}many times</h2>
       <button onClick={this.props.incrementfun}>increment</button>
       <button onClick={this.props.reductionfun}>reduction</button>
      </div>
    )
  }
}
