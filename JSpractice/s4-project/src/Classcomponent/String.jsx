import React, { Component } from 'react'

export default class String extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         business:"",
      }
    }
    changeBusiness=()=>{
        this.setState({
            business:"hii hello welcome to the string"
        })
    }
  render() {
    return (
      <div>
        <button onClick={this.changeBusiness}>Business</button>
        <h2>Hello from the string Component</h2>
        <p>Business:{this.state.business}</p>
      </div>
    )
  }
}
