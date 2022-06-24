import React, { Component } from 'react'

export default class Vasucycle2 extends Component {
    constructor(props) {
        console.log("constructor Triggered in Vasucycle2")
        super(props)
      
        this.state = {
          first:""
        }
    }
    
  render() {
    console.log("render Triggered in Vasucycle2")
    return (
      <div>
        <p>Vasucycle2</p>
        <p>{this.props.msg}</p>
      </div>
    )
  }
  componentDidMount(){
    console.log("componentDidMount Triggered in Vasucycle2")
  }
  shouldComponentUpdate(){
    console.log("shouldComponentUpdate Triggered in Vasucycle2")
  }
  componentDidUpdate(){
    console.log("componentDidUpdate Triggered in Vasucycle2")
  }
}
