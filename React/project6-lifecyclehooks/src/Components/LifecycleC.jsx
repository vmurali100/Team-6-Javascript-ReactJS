import React, { Component } from 'react'
import Count3 from './Count3'
import LifecycleD from './LifecycleD'

export default class LifecycleC extends Component {
    constructor(props) {
        console.log("constructor triggered LifecycleC")
      super(props)
    
      this.state = {
         message:"i am from LifecycleC ",
         count:10
      }
    }
  render() {
    console.log("render triggered LifecycleC")
    return (
      <div>
        <p>LifecycleC</p>
        <button onClick={()=>{this.setState({message:"i am changed in LifecycleC",count:5})}}>change message</button>
        <hr />
        <LifecycleD msg={this.state.message}/>
        <hr />
        {this.state.count===10 && <Count3/>}
      </div>
    )
  }
  componentDidMount(){
    console.log("componentDidMount triggered LifecycleC")
  }
}
