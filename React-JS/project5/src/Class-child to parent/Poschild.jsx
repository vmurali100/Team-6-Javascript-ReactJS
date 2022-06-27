import React, { Component } from 'react'
import axios from 'axios'
export default class Poschild extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         post:[]
      }
    }
    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/posts").then((response)=>{this.setState({post:response.data})})
    }
  render() {
    const {receivepost}=this.props
    const {post}=this.state
    return (
      <div>
        <button onClick={()=>{receivepost(post)}}>click</button>
      </div>
    )
  }
}
