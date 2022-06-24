import React, { Component } from 'react'
import Countcomponent from './Countcomponent'
import Lifecycleb from './Lifecycleb'

export default class Lifecyclea extends Component {
    constructor(props){
        console.log("constructor triggered lifecyclea")
        super(props)
        this.state = {
            message :"Iam from lifecyclea",
            count:10
        }
    }
  render() {
    console.log("render triggered lifecyclea")
    return (
      <div>
        <p>lifecyclea</p>
        <button onClick={()=>{this.setState({message:"iam changed in lifecyclea",count:15})}}>change message in lifecyclea</button>
        <hr/>
        <Lifecycleb msg={this.state.message}/>
        <hr/>
        {this.state.count === 10 && <Countcomponent/> }
      </div>
    )
  }
  componentDidMount(){
    console.log("componentDidMount triggered lifecyclea")
  }
}
