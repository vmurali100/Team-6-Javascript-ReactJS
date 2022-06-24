import React, { Component } from 'react'
import CountComponentAB from './CountComponentAB'
import LifeCycleRam2 from './LifeCycleRam2'

export default class LifeCycleRam1 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:"Hello I am From LifeCycleRam1",
         count:18
      }
    }
  render() {
    return (
      <div>
        <p>LifeCycleRam1</p>
        <button onClick={()=>{this.setState({message:"I am From Chnaged Message" ,count:15})}}>Changed Message In LIfeCycleRam1</button>
        <hr />
        <LifeCycleRam2 msg={this.state.message}/>

        {this.state.count === 18 && <CountComponentAB/>}
      </div>
    )
  }

  componentDidMount(){
    console.log("componentDidMount Did Mount")
  }
}
