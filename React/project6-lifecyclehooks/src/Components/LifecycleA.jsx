import React, { Component } from 'react'
import CountComponent from './CountComponent'
import CountComponentt from './CountComponent'
import LifecycleB from './LifecycleB'

export default class LifecycleA extends Component {
    constructor(props) {
        console.log("constructor triggered LifecycleA")
      super(props)
    
      this.state = {
         message:"i am from LifecycleA",
         count:10
      }
    }
  render() {
    console.log("render triggered LifecycleA")
    return (
      <div>
        <p>LifecycleA</p>
        <button onClick={()=>{this.setState({message:"i am changed in LifecycleA",count:15})}}>change message</button>
        <hr />
        <LifecycleB msg={this.state.message}/>
        <hr />
        {this.state.count===10 && <CountComponent/>}
      </div>
      
    )
  }
  componentDidMount(){
    console.log("component didmount triggered LifecycleA")
  }
}
