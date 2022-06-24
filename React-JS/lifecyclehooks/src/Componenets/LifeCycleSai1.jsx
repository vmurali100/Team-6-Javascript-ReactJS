import React, { Component } from 'react'
import CountComponentAB from './CountComponentAB'
import LifeCycleSai2 from './LifeCycleSai2'

export default class LifeCycleSai1 extends Component {
    constructor(props) {
        console.log("constructor Triggered LifecycleSai1")
      super(props)
    
      this.state = {
        message:"I am From Life LifeCycleSai1",
        count:10
      }
    }
  render() {
    console.log("render Triggered LifecycleSai1")
    return (
      <div>
        <p>LifeCycleSai1</p>
        <button onClick={()=>{this.setState({message:"I am Changed In LifecycleSai1",count:10})}}>Change Message in LifeCycleSai1</button>
        <hr />
        <LifeCycleSai2 msg={this.state.message}/>
        <hr />
        {this.state.count === 10 && <CountComponentAB/>}
      </div>
      
    )
  }
  componentDidMount(){
    console.log("componentDidMount Did Mount")
  }
}
