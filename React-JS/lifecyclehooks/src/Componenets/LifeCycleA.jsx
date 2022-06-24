import React, { Component } from 'react'
import CountComponentAB from './CountComponentAB'
import LifeCycleB from './LifeCycleB'

export default class LifeCycleA extends Component {
    constructor(props) {
        console.log("constructor Triggered LifeCycleA")
      super(props)
    
      this.state = {
         message:"I am from LifeCycleA",
         count:10
      }
    }
  render() {
    console.log("render Triggered LifeCycleA")
    return (
      <div>
        <p>LifeCycleA</p>
        <button onClick={()=>{this.setState({message:"I am Changed in LifeCycleA",count:15})}}>Chnage Message in LifeCycleA</button>
        <hr />
        <LifeCycleB msg={this.state.message}/>
        <hr />
        {this.state.count === 10 && <CountComponentAB/>}
      </div>
    )
  }

  componentDidMount(){
    console.log("componentDidMount Did Mount LifeCycleA")
  }
}
