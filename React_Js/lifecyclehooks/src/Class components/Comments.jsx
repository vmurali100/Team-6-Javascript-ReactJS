import axios from 'axios'
import React, { Component } from 'react'
import Commentstable from './Commentstable'

export default class Comments extends Component {
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
    return (
      <div>
        <Commentstable comments={this.state.comments}/>
      </div>
    )
  }
}
