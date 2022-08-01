import React, { Component } from 'react'

export default class LifecycleB extends Component {
    constructor(props) {
        console.log("constructor Triggered in LifecyccleB")
      super(props)
    
      this.state = {
         first:""
      }
    }
    // Will Triggered Both mounting Face and Update phases
  render() {
    console.log("render Triggered in LifecycleB")
    return (
      <div>
        <p>LifecycleB</p>
        <p>{this.props.msg}</p>
      </div>
    )
  }
  // Will Triggered in Mounting phases
  componentDidMount(){
    console.log("componentDidMount Did Mount LifecycleB")
  }
  // Will Triggered in Update phases
  shouldComponentUpdate(){
    console.log("shouldComponentUpdate LifecycleB Triggered")
    return true
  }
  // Will Triggered in Updating phases
  componentDidUpdate(){
    console.log("componentDidUpdate LifecycleB Triggered")
  }
}
