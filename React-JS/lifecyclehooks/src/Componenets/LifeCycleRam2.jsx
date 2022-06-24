import React, { Component } from 'react'

export default class LifeCycleRam2 extends Component {
    constructor(props) {
        console.log("constructor Triggered In LifeCycleRam2 ")

      super(props)
    
      this.state = {
         first:""
      }
    }
  render() {
    console.log("render Triggered In LifeCycleRam2 ")

    return (
      <div>
        <p>LifeCycleRam2</p>
        <p>{this.props.msg}</p>
      </div>
    )
  }

  componentDidMount(){
    console.log("componentDidMount Triggered In LifeCycleRam2 ")
  }

  shouldComponentUpdate(){
    console.log("shouldComponentUpdate Triggered In LifeCycleRam2 ")
    return true

  }

  componentDidUpdate(){
    console.log("componentDidUpdate Triggered In LifeCycleRam2 ")

  }
}
