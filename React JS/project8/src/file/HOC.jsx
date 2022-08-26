 import axios from 'axios'
 import React, { Component } from 'react'

export default function HOC(Orginal) {
    
    
  class HOC extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         user:[]
      }
    }
    componentDidMount(){
        const url = "http://localhost:3000/user"
        axios.get(url).then((response)=>{this.setState({user:response.data})})
    }
   
      render() {
        return (
         <Orginal user={this.state.user}  />
        )
      }
    }
    
  return HOC
}
