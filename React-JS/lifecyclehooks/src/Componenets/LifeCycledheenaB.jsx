import React, { Component } from 'react'

export default class LifeCycledheenaB extends Component {
    constructor(props) {
        console.log("constructor Triggered In LifeCycledheenaB")
      super(props)
    
      this.state = {
         first:""
      }
    }
  render() {
    console.log("render Triggered In LifrCycledheenaB")
    return (
      <div>
        <p>LifeCycledheenaB</p>
         <p>{this.props.msg}</p>
      </div>
    )
  }

  componentDidMount(){
    console.log("componentDidMount Triggered Inn LifeCycledheenaB")
    return true
  }

  shouldComponentUpdate(){
  console.log("shouldComponentUpdate Triggered In LifeCycledhennaB")
   return true
  }

  componentDidUpdate(){
    console.log("componentDidUpdate Triggered In LifeCycledhennaB")
}

}
