import React, { Component } from 'react'
import NewChildComp from './NewChildComp'
import { TextComp } from './TextComp'

export default class NewParentComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:"WelCome To Parent Component"
      }
    }

    SendMessage =()=>{
        return <TextComp msg={this.state.message}/>
    }

  render() {
    return (
      <div>
        <p>NewParentComp</p>
        <NewChildComp Sai={this.SendMessage()}/>
      </div>
      
    )
  }
}
