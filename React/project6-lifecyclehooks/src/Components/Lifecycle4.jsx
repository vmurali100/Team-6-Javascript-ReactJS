import React, { Component } from 'react'

export default class Lifecycle4 extends Component {
    constructor(props) {
        console.log("constructor triggered Lifecycle4")
      super(props)
    
      this.state = {
        
      }
    }
  render() {
    console.log("render triggered Lifecycle4")
    return (
      <div>
        <p>Lifecycle4</p>
        <p>{this.props.msg}</p>
      </div>
    )
  }
  componentDidMount(){
    console.log("componentDidMount triggered Lifecycle4")
  }
  shouldComponentUpdate(){
    console.log("shouldComponentUpdate triggered Lifecycle4")
    return true
  }
  componentDidUpdate(){
    console.log("componentDidUpdate triggered Lifecycle4")
  }
}
