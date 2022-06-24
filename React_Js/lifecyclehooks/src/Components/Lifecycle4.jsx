import React, { Component } from 'react'

export default class Lifecycle4 extends Component {
    constructor(props){
        console.log("constructor triggered in lifecycle4")
        super(props)
        this.state={
            first:""
        }
    }
  render() {
    console.log("render triggered in lifecycle4")
    return (
      <div>
        <p>lifecycle4</p>
        <p>{this.props.life}</p>
      </div>
    )
  }
  componentDidMount(){
    console.log("componentDidMount triggered in lifecycle4")
  }
  shouldComponentUpdate(){
    console.log("shouldComponentUpdate triggered in lifecycle4")
    return true
  }
  componentDidUpdate(){
    console.log("componentDidUpdate triggered in lifecycycle4")
  }
}
