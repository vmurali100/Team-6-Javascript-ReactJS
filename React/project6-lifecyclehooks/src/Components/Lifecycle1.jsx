import React, { Component } from 'react'
import Count1 from './Count1'
import Lifecycle2 from './Lifecycle2'

export default class Lifecycle1 extends Component {
    constructor(props) {
        console.log("constructor triggered Lifecycle1")
      super(props)
    
      this.state = {
         message:"i am from Lifecycle1",
         count:20
      }
    }
  render() {
    console.log("render triggered Lifecycle1")
    return (
      <div>
        <p>Lifecycle1</p>
        <button onClick={()=>(this.setState({message:"i am changed in Lifecycle1 ",count:15}))}>change message</button>
        <hr />
        <Lifecycle2 message={this.state.message}/>
        <hr />
        {this.state.count===20 && <Count1/>}
      </div>
    )
  }
  componentDidMount(){
    console.log("componentDidMount triggered Lifecycle1")
  }
}
