import React, { Component } from 'react'

export default class LifeCycleSai2 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         first:""
      }
    }
  render() {
    return (
      <div>
        <p>LifeCycleSai2</p>
        <p>{this.props.msg}</p>
      </div>
    )
  }
  componentDidMount(){
  console.log("componentDidMount Triggered in LifeCycleSai2")
  }
  
  shouldComponentUpdate(){
    console.log("shouldComponentUpdate Triggered in LifeCycleSai2")
    return true
  }

  componentDidUpdate(){
    console.log("componentDidUpdate Triggered in LifeCycleSai2")
  }

}
