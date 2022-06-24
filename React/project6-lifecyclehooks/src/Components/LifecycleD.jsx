import React, { Component } from 'react'

export default class LifecycleD extends Component {
    constructor(props) {
        console.log("constructor triggered LifecycleC")
      super(props)
    
      this.state = {
       
      }
    }
  render() {
    console.log("render triggered LifecycleC")
    return (
      <div>
        <p>LifecycleD</p>
        <p>{this.props.msg}</p>
      </div>
    )
  }
  componentDidMount(){
    console.log("componentDidMount triggered LifecycleC")
  }
  shouldComponentUpdate(){
    console.log("shouldComponentUpdate triggered LifecycleC")
    return true
  }
  componentDidUpdate(){
    console.log("componentDidUpdate triggered LifecycleC")
  }
}
