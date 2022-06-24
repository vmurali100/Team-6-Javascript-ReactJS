import React, { Component } from 'react'

export default class LifecycleF extends Component {
    constructor(props){
        console.log("constructor triggered in lifecycleF")
        super(props)
        this.state={
            first:""
        }
    }
  render() {
    console.log("render triggered in lifecycleF")
    return (
      <div>
        <p>LifecycleF</p>
        <p>{this.props.life}</p>
      </div>
    )
  }
  componentDidMount(){
    console.log("componentDidMount triggered in lifecycleF")
  }
  shouldComponentUpdate(){
    console.log("shouldComponentUpdate triggered in lifecycleF")
    return true
  }
  componentDidUpdate(){
    console.log("componentDidUpdate triggered in lifecycleF")
  }
}
