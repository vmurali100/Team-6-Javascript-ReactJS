import React, { Component } from 'react'
import Count3 from './Count3'
import Lifecycle4 from './Lifecycle4'

export default class Lifecycle3 extends Component {
    constructor(props){
        console.log("constructor triggered in lifecycle3")
        super(props)
        this.state={
            lifecycle:"Hello from lifecycle3",
            count:5
        }
    }
  render() {
    console.log("render triggered in lifecycle3")
    return (
      <div>
        <p>Lifecycle3</p>
        <button onClick={()=>{this.setState({lifecycle:"Iam changed the lifecycle",count:10})}}>change the message</button>
        <hr/>
        <Lifecycle4 life={this.state.lifecycle}/>
        <hr/>
        {this.state.count ===5 && <Count3/>}
      </div>
    )
  }
  componentDidMount(){
    console.log("componentDidMount triggered in lifecycle3")
  }
}
