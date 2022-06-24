import React, { Component } from 'react'

export default class Lifecycle2 extends Component {
    constructor(props) {
        console.log("constructor Triggered in Lifecycle2")
      super(props)
    
      this.state = {
        first:""
      }
    }
    //Will Trigger Both Mounting Face and Update Phases
  render() {
    console.log("render Triggered in Lifecycle2")
    return (
      <div>
        <p>Lifecycle2</p>
        <p>{this.props.msg}</p>
      </div>
    )
  }
  //Will Trigger in mounting Phases
  componentDidMount(){
    console.log("componentDidMount Did Mount in Lifecycle2")
  }
  //Will Trigger in Update Phases
  shouldComponentUpdate(){
    console.log("shouldComponentUpdate Lifecycle2 Triggered")
    return true
  }
  //Will Trigger in update Phases
  componentDidUpdate(){
    console.log("componentDidUpdate Lifecycle2 Triggered")
  }
}
