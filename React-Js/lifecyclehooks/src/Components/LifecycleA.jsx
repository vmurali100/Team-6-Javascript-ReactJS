import React, { Component } from 'react'
import CountCompnentA from './CountCompnentA'
import LifecycleB from './LifecycleB'

export default class LifecycleA extends Component {
    constructor(props) {
        console.log("constructor Triggered in LifecycleA")
      super(props)
    
      this.state = {
        message:"I am From LifecycleA",
        count:10
      }
    }
    
  render() {
    console.log("render Triggered in LifecycleA")
    return (
      <div>
        <p>LifecycleA</p>
        <button onClick={()=>{this.setState({message:"I am changed LifecycleA",count:15})}}>Change Message in LifecycleA</button>
        <hr />
        <LifecycleB msg={this.state.message}/>
        <hr />
        {this.state.count === 10 && <CountCompnentA/>}
      </div>
    )
  }
  componentDidMount(){
    console.log("componentDidMount Did Mount in LifecycleA")
  }
}
