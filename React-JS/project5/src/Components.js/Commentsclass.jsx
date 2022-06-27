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
        const url=" http://localhost:3000/comments"
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

