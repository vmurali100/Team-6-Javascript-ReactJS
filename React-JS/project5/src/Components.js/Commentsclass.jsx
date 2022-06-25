import React, { Component } from 'react'
import Commentstable from './Commentstable'
import axios from 'axios'
export default class Commentsclass extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         comments:[]
      }
    }
    componentDidMount(){
        const url="https://jsonplaceholder.typicode.com/comments"
        axios.get(url).then((Response)=>{this.setState({comments:Response.data})})
    }
  render() {
    return (
      <div>
        <Commentstable com={this.state.comments}/>
      </div>
    )
  }
}

