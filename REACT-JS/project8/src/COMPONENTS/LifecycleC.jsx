import React, { Component } from 'react'
import  CountComponent  from './CountComponent'
import LifecycleD from './LifecycleD'

export default class LifecycleC extends Component {
  constructor(props) {
    console.log("constructor triggered")
    super(props)
    this.state = {
        message: "Roae is the queen for all the flowers",
      count:20
    }
  }
  render() {
    console.log("constructor triggered")
    return (
      <div>
      <p>LifecycleC</p>
      <hr/>
      <button onClick={()=>{this.setState({message:"i am changed in LifecycleC",count:25})}}>change msg in LifecycleC</button>
      <LifecycleD msg={this.state.message}/>
      <hr/>
      {this.state.count ===20 &&<CountComponent/>}
      </div>
    )
  }
  componentDidMount(){
    console.log("componentDidMount Did Mount")
  }
}
