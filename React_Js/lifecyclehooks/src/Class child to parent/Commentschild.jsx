import axios from 'axios'
import React, { Component } from 'react'

export default class Commentschild extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         comments:[]
      }
    }
    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/comments").then((response)=>{this.setState({comments:response.data})})
    }
  render() {
    const{receivecomments}=this.props
    const{comments}=this.state
    return (
      <div>
        <button onClick={()=>{receivecomments(comments)}}>send data to parent</button>
      </div>
    )
  }
}
