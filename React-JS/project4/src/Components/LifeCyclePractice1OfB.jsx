import React, { Component } from 'react'

export default class LifeCyclePractice1OfB extends Component {
    constructor(props) {
        console.log("Constructor Triggered in LifeCycleB")
      super(props)
    
      this.state = {
      }
    }
  render() {
    console.log("render Triggered in LifeCycleB")
    return (
      <div>
        <p>LifeCycleOfB</p>
        <p>{this.props.msg}</p>
        <p>{this.props.Person.MovieName}{this.props.Person.Heros}</p>
      </div>
    )
  }
  componentDidMount(){
    console.log("componentDidMount Triggered in LifeCycleB")
  }
  shouldComponentUpdate(){
    console.log("ShouldComponentsUpdate LifeCycleB Triggered")
    return true
  }
  componentDidUpdate(){
    console.log("componentDidUpdate LifeCycleB Triggered")
  }
}
