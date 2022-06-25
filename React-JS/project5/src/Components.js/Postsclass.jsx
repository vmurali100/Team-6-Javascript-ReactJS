import React, { Component } from 'react'
import axios from 'axios'
import Poststable from './Poststable'
export default class Postsclass extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         post:[]
      }
    }
    componentDidMount(){
        const url="https://jsonplaceholder.typicode.com/posts"
        axios.get(url).then((Response)=>{this.setState({post:Response.data})})
    }
  render() {
    return (
      <div>
        <Poststable pos={this.state.post}/>
      </div>
    )
  }
}
