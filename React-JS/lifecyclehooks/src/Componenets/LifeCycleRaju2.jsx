import React, { Component } from 'react'

export default class LifeCycleRaju2 extends Component {
    constructor(props) {
        console.log("constructor Triggared In LifeCycleRaju2 phases")

      super(props)
    
      this.state = {
         first:""
      }
    }
  render() {
    console.log("render Triggared In LifeCycleRaju2 phases")
    return (
      <div>
        <p>LifeCycleRaju2</p>
        <p>{this.props.msg}</p>
      </div>
    )
  }
  componentDidMount(){
       console.log("componentDidMount Triggared In LifeCycleRaju2 phases")
  }

  shouldComponentUpdate(){
    console.log("shouldComponentUpdate Triggared In LifeCycleRaju2 phases")
    return true
  }

 componentDidUpdate(){
    console.log("componentDidUpdate Triggared In LifeCycleRaju2 phases")

 }
}
