import React, { Component } from 'react'
import Count2 from './Count2'
import Count3and4 from './Count2'
import Lifecycle4 from './Lifecycle4'

export default class Lifecycle3 extends Component {
    constructor(props) {
        console.log("constructor triggered Lifecycle3")
      super(props)
    
      this.state = {
        message:"i am from lifecycle3",
        count:30
      }
    }
  render() {
    console.log("render triggered Lifecycle3")
    return (
      <div>
        <p>Lifecycle3</p>
        <button onClick={()=>{this.setState({message:"i am changed in lifecycle3",count:15})}}>change msg</button>
        <hr />
        <Lifecycle4 msg={this.state.message}/>
        <hr />
        {this.state.count===30 && <Count2/>}
      </div>
    )
  }
  componentDidMount(){
    console.log("componentDidMount triggered Lifecycle3")
  }
}
