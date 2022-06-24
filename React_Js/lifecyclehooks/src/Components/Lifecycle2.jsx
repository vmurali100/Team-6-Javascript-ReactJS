import React, { Component } from 'react'

export default class Lifecycle2 extends Component {
    constructor(props){
        console.log("constructor triggered in lifecycle2")
        super(props)
        this.state={
            first:""
        }
    }
  render() {
    console.log("render triggered in lifecycle2")
    return (
      <div>
        <p>lifecycle2</p>
        <p>{this.props.msg}</p>
      </div>
    )
  }
  componentDidMount(){
    console.log("componentDidMount triggered in lifecycle2")
  }
  shouldComponentUpdate(){
    console.log("shouldComponentUpdate triggered in lifecycle2")
    return true
  }
  componentDidUpdate(){
    console.log("componentDidUpdate triggered in lifecycle2")
  }
}
