import React, { Component } from 'react'

export default class LifecycleB extends Component {
    constructor(props) {
        console.log("constructor triggered LifecycleB")
      super(props)
    
      this.state = {
         first:""
      }
    }
  render() {
    console.log("render triggered LifecycleB")
    return (
      <div>
        <p>LifecycleB</p>
        <p>{this.props.msg}</p>
       
      </div>
    )
  }
  componentDidMount(){
    console.log("componentDidMount triggered LifecycleB")
  }
  shouldComponentUpdate(){
    console.log("shouldComponentUpdate triggered LifecycleB")
    return true
  }
  componentDidUpdate(){
    console.log("componentDidUpdate triggered LifecycleB")
  }
}
