import React, { Component } from 'react'
import Count2 from './Count2'
import Lifecycled from './Lifecycled'

export default class Lifecyclec extends Component {
    constructor(props){
        console.log("constructor triggered in lifecyclec")
        super(props)
        this.state={
            message:"Hello from the lifecyclec",
            count:5
        }
    }
  render() {
    console.log("render triggered in lifecyclec")
    return (
      <div>
        <p>Lifecyclec</p>
        <button onClick={()=>{this.setState({message:"iam from changed message",count:10})}}>change message from lifecyclec</button>
        <hr/>
        <Lifecycled msg={this.state.message}/>
        <hr/>
        {this.state.count ===5  && <Count2/>}
      </div>
    )
  }
  componentDidMount(){
    console.log("componentDidMount triggered in lifecyclec")
  }
}
