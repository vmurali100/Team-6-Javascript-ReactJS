import React, { Component } from 'react'

export default class LifecycleB extends Component {
    constructor(props) {
        console.log("constructor Triggered in LifecycleB")
      super(props)
    
      this.state = {
        first:""
      }
    }
    
  render() {
    console.log("render Triggered in LifecycleB")
    return (
      <div>
        <p>LifecycleB</p>
        <p>{this.props.msg}</p>        
      </div>
    )
  }
  componentDidMount(){
    console.log("componentDidMount Did Mount in LifecycleB")
  }
  shouldComponentUpdate(){
    console.log("shouldComponentUpdate Update Triggered in LifecycleB")
  }
  componentWillUnmount(){
    console.log("componentWillUnmount Will Unmount Triggered in LifecycleB")
  }
}
