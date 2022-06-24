import React, { Component } from 'react'

export default class Lifecycleb extends Component {
    constructor(props){
        console.log("constructor triggered lifecycleb")
        super(props)
        this.state ={
            first:""
        }
    }
  render() {
    console.log("render triggered lifecycleb")
    return (
      <div>
        <p>lifecycleb</p>
        <p>{this.props.msg}</p>
      </div>
    )
  }
  componentDidMount(){
    console.log("componentDidMount triggered lifecycleb")
  }
  shouldComponentUpdate(){
    console.log("shouldComponentUpdate triggered lifecycleb")
    return true
  }
}
