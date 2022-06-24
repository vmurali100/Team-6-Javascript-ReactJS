import React, { Component } from 'react'

export default class Lifecycled extends Component {
    constructor(props){
        console.log("constructor triggeered in lifecycled")
        super(props)
        this.state={
            firts:""
        }
    }
  render() {
    console.log("render triggered in lifecycled")
    return (
      <div>
        <p>Lifecycled</p>
        <p>{this.props.msg}</p>
      </div>
    )
  }
  componentDidMount(){
    console.log("componentDidMount triggered in lifecycled")
  }
  shouldComponentUpdate(){
    console.log("shouldComponentUpdate triggered in lifecycled")
    return true
  }
  componentDidUpdate(){
    console.log("componentDidUpdate triggered in lifecycled")
  }
}
