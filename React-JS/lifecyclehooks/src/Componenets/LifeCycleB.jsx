import React, { Component } from 'react'

export default class LifeCycleB extends Component {
    constructor(props) {
        console.log("constructor Triggered in LifeCycleB")
      super(props)
    
      this.state = {
         first:""
      }
    }
    //Will Trigger Both MOunting Face and Update phases
  render() {
    console.log("render Triggered in LifeCycleB")
    return (
      <div>
        <p>LifeCycleB</p>
        <p>{this.props.msg}</p>
      </div>
    )
  }
  //Will Trigger In Mounting phases
  componentDidMount(){
    console.log("componentDidMount Triggered in LifeCycleB")
  }
  //Will Trigger In Update phases
  shouldComponentUpdate(){
    console.log("shouldComponentUpdate LifeCycleB Triggered ")
    return true
  }
  //Will Trigger In Update phases 
  componentDidUpdate(){
    console.log("componentDidUpdate LifeCycleB Triggered ")

  }
}
