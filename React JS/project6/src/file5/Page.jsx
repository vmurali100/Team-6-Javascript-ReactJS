import React from 'react'
import { Component } from 'react'

export function Page(Orginal) {
   
 class Page extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    
    increase=()=>{
        this.setState({count:this.state.count+1})
      }
  render() {
    return (
      <div><Orginal count={this.state.count} increase={this.increase} /></div>
    )
  }
}


  return  Page
   
  
}
