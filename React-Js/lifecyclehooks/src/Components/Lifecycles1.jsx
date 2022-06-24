import React, { Component } from 'react'
import CountCompnent1 from './CountCompnent1'
import Lifecycle2 from './Lifecycle2'

export default class Lifecycles1 extends Component {
    constructor(props) {
        console.log("constructor Triggered in Lifecycles1")
      super(props)
    
      this.state = {
        message:"I am From Lifecycles1",
        count:10
      }
    }
  render() {
    console.log("render Triggered in Lifecycles1")
    return (
      <div>
        <p>Lifecycles1</p>
        <button onClick={()=>{this.setState({message:"I am Changed Lifecycles1",count:15})}}>Chanege Message in Lifecycles1</button>
        <hr />
        <Lifecycle2 msg={this.state.message}/>
        <hr />
        {this.state.count === 10 && <CountCompnent1/>}
      </div>
    )
  }
  componentDidMount(){
    console.log("componentDidMount Did Mount in Lifecycles1")
  }
}
