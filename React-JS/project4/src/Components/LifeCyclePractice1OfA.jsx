import React, { Component } from 'react'
import CountComponents from './CountComponents'
import LifeCyclePractice1OfB from './LifeCyclePractice1OfB'

export default class LifeCyclePractice1OfA extends Component {
    constructor(props) {
        console.log("Hi Welcome to LifeCycleOfA")
      super(props)
      this.state = {  
        Message:"Iam From Life CycleA" ,
        Count:25,
        Person:{
            MovieName:"RRR",
            Heros:"RamCharan,Jr.Ntr"
        }
      }
    }
  render() {
    console.log("render Triggered LifeCycleOfA")
    return (
      <div> 
        <p>LifeCycleOfA</p>
        <button onClick={()=>{this.setState({Message:"Hi Iam Changed in LifeCycleofA",Count:30})}}>Change Message in LifeCycleA</button>
        <button onClick={()=>{this.setState({Person:{MovieName:"Vikram",Heros:"KamalHaasan"}})}}>Change Person in LifeCycleA</button>
        <hr />
        <LifeCyclePractice1OfB msg={this.state.Message} Person={this.state.Person}/>
        <hr />
        {this.state.Count === 25 && <CountComponents/>}
   
         
      </div>
    )
  }
  componentDidMount(){
    console.log("componentDidMount Did Mount LifeCycleOfA")
  }
}