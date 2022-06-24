import React, { Component } from 'react'
import CountComponentAB from './CountComponentAB'
import LifeCycledheenaB from './LifeCycledheenaB'

export default class LifeCycledheenaA extends Component {
    constructor(props) {
        console.log("constructor Triggered in LifeCycledheenaA")
      super(props)
    
      this.state = {
         message:"I am From Life LifeCycledeenaA",
         count:50
      }
    }
  render() {
    console.log("render Triggerd in LifeCycledheenaA")
    return (
      <div>
        <p>LifeCycledheenaA</p>
        <button onClick={()=>{this.setState({message:"I am Changed In LifeCycledheenaA" ,count:50})}}>Change Message LifeCycledheenaA</button>
        <hr />
        <LifeCycledheenaB msg={this.state.message}/>

        {this.state.count === 50 && <CountComponentAB/>}
      </div>
    )
  }

  componentDidMount(){
    console.log("componentDidMount Triggered In LifeCycledheenaA")
  }
}
