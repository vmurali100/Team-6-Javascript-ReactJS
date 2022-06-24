import React, { Component } from 'react'
import  CountComponent  from './CountComponent'
import LifecycleB from './LifecycleB'

export default class LifecycleA extends Component {
  constructor(props) {
    console.log("constructor triggered")
    super(props)
    this.state = {
      message: "i am Naveen kumar",
      count:15
    }
  }
  render() {
    console.log("constructor triggered")
    return (
      <div>
      <p>LifecycleA</p>
      <hr/>
      <button onClick={()=>{this.setState({message:"i am changed in LifecycleA",count:20})}}>change msg in LifecycleA</button>
      <LifecycleB msg={this.state.message}/>
      <hr/>
      {this.state.count === 15 &&<CountComponent/>}
      </div>
    )
  }
  componentDidMount(){
    console.log("componentDidMount Did Mount")
  }
}
