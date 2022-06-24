import React, { Component } from 'react'
import CountCompAB1and2 from './CountCompAB1and2'
import LifecycleAB2 from './LifecycleAB2'

export default class LifecycleAB1 extends Component {
    constructor(props) {
        console.log("constructor Triggered in LifecycleAB1")
      super(props)
    
      this.state = {
        message:"I am From LifecycleAB1",
        count:15
      }
    }    
  render() {
    console.log("render triggered in LifecycleAB1")
    return (
      <div>
        <p>LifecycleA1</p>
        <button onClick={()=>{this.setState({message:"I am Changed LifecycleAB1",count:25})}}>Change Message in LifecycleA1</button>
        <hr />
        <LifecycleAB2 msg={this.state.message}/>
        <hr />
        {this.state.count === 50 && <CountCompAB1and2/>}
      </div>
    )
  }
  componentDidMount(){
    console.log("componentDidMount Triggered in LifecycleAB1")
  }
}
