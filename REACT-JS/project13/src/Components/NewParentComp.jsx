import React, { Component } from 'react'
import NewChildComp from './NewChildComp'
import TextComponents from './TextComponents'

export default class NewParentComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message : "wellcome to the sunline family"
      }
    }

    sendmessage=()=>{
        return <TextComponents msg={this.state.message }/>
    }
  render() {
    return (
      <div>
        <p>NewParentComp</p>
        <NewChildComp render={this.sendmessage()}/>
      </div>
    )
  }
}
