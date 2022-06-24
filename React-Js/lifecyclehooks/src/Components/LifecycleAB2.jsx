import React, { Component } from 'react'

export default class LifecycleAB2 extends Component {
    constructor(props) {
        console.log("constructor Triggered in LifecycleAB2")
      super(props)
    
      this.state = {
         first:""
      }
    }
    
  render() {
    console.log("render Triggered in LifecycleAB2")
    return (
      <div>
        <p>LifecycleAB2</p>
        <p>{this.props.msg}</p>
      </div>
    )
  }
  componentDidMount(){
    console.log("componentDidMount Did Mount in LifecycleAB2")
  }
  shouldComponentUpdate(){
    console.log("shouldComponentUpdate LifecycleAB2 Triggered")
  }
  componentDidUpdate(){
    console.log("componentDidUpdate LifecycleAB2 Triggered")
  }
}
