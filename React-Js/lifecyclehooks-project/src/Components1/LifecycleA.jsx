import React, { Component } from 'react'
import Countcomponent from './Countcomponent'
import LifecycleB from './LifecycleB'

export default class LifecycleA extends Component {
    constructor(props) {
        console.log("construcor Triggered LifecycleA")
      super(props)
    
      this.state = {
         message:"I am Form LifecycyleA",
         count:0
      }
    }
  render() {
    console.log("Render Triggered LifecycleA")
    return (
      <div>
        <p>LifecycleA</p>
        <button onClick={()=>{this.setState({message:"I am Changed in LifecycleA",count:16})}}>Change message in LifecycleA</button>
        <hr />
        <LifecycleB msg={this.state.message}/>
        <hr />
        {this.state.count === 10 && <Countcomponent/>}
      </div>
    )
  }
  componentDidMount(){
    console.log("componentDidMount Did Mount LifecycleA")
  }
}
