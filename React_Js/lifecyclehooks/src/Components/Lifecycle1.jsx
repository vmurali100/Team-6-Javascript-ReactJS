import React, { Component } from 'react'
import Count1 from './Count1'
import Lifecycle2 from './Lifecycle2'

export default class Lifecycle1 extends Component {
    constructor(props){
        console.log("constructor triggered in lifecycle1")
        super(props)
        this.state={
            message:"Iam from lifecycle1",
            count:15
        }
    }
  render() {
    console.log("render triggered in lifecycle1")
    return (
      <div>
        <p>lifecycle1</p>
        <button onClick={()=>{this.setState({message:"Iam changed lifecycle1", count:20})}}>change message in lifecycle1</button>
        <hr/>
        <Lifecycle2 msg={this.state.message}/>
        <hr/>
        {this.state.count === 15  && <Count1/>}
      </div>
    )
  }
  componentDidMount(){
    console.log("componentDidMount triggered in lifecycle1")
  }
}
