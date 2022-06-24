import React, { Component } from 'react'

export default class Lifecycle2 extends Component {
    constructor(props) {
        console.log("constructor triggered Lifecycle2")
      super(props)
    
      this.state = {
         first:""
      }
    }
  render() {
    console.log("render triggered Lifecycle2")
    return (
      <div>
        <p>Lifecycle2</p>
        <p>{this.props.message}</p>
      </div>
    )
  }
  componentDidMount(){
    console.log("componentDidMount triggered Lifecycle2")
  }
  shouldComponentUpdate(){
    console.log("shouldComponentUpdate triggered Lifecycle2")
    return true
  }
  componentDidUpdate(){
    console.log("componentDidUpdate triggered Lifecycle2")

  }
}
