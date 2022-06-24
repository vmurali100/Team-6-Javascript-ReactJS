import React, { Component } from 'react'
import CountComponentAB from './CountComponentAB'
import LifeCycleRaju2 from './LifeCycleRaju2'

export default class LifeCycleRaju1 extends Component {
    constructor(props) {
        console.log("constructor Triggared in LifeCycleRaju1")
      super(props)
    
      this.state = {
         message:"I am From LifeCycleRaju1",
         count:20
      }
    }
  render() {
    console.log("render Triggared in LifeCycleRaju1")
    return (
      <div>
        <p>LifeCycleRaju1</p>
        <button onClick={()=>{this.setState({message:"Iam Changed From LifeCycleRaju1" , count:25})}}>Change message in LifeCycleRaju1</button>
        <hr />
        <LifeCycleRaju2 msg={this.state.message}/>
        <hr />
        {this.state.count === 20 && <CountComponentAB/>}
      </div>
    )
  }
  componentDidMount(){
    console.log("componentDidMount did Mount LifeCycleRaju1")
  }
}
