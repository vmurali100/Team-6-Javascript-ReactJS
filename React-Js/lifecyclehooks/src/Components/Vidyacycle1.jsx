import React, { Component } from 'react'
import CountComp1and2 from './CountComp1and2'
import Vasucycle2 from './Vasucycle2'

export default class Vidyacycle1 extends Component {
    constructor(props) {
        console.log("constructor Triggered in Vidyacycle1")
      super(props)
    
      this.state = {
        message:"I am From Vidyacycle1",
        count:10
      }
    }    
  render() {
    console.log("render Triggered in Vidyacycle1")
    return (
      <div>
        <p>Vidyacycle1</p>   
        <button onClick={()=>{this.setState({message:"I am changed Vidyacycle1",count:25})}}>Change Message in Vidyacycle1</button>
        <hr />
        <Vasucycle2 msg={this.state.message}/>
        <hr />
        {this.state.count === 10 && <CountComp1and2/>}
      </div>
    )
  }
  componentDidMount(){
    console.log("componentDidMount Did Mount in Vidyacycle1")
  }
}
