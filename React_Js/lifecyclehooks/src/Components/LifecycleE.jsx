import React, { Component } from 'react'

import Count4 from './Count4'
import LifecycleF from './LifecycleF'

export default class LifecycleE extends Component {
    constructor(props){
        console.log("constructor triggered in lifecycleF")
        super(props)
        this.state={
            lifecycle:"Iam from changed lifecycle",
            count:5        }
    }
  render() {
    console.log("render triggered in lifecycleF")
    return (
      <div>
        <p>LifecycleE</p>
        <button onClick={()=>{this.setState({lifecycle:"Iam from changed lifecycle in lifecyclehook",count:10})}}>change the lifecycle</button>
        <hr/>
        <LifecycleF life={this.state.lifecycle}/>
        <hr/>
        {this.state.count ===5 && <Count4/>}
      </div>
    )
  }
  componentDidMount(){
    console.log("componentDidMount triggered in lifecycleF")
  }
}
