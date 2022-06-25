import React, { Component } from 'react'
import axios from 'axios'
import { Commentstable } from './Commentstable'
export default class  extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         comments:[]
      }
    }
    componentDidMount(){
        const url="  http://localhost:3000/comments"
        axios.get(url).then((response)=>{this.setState({comments:response.data})})
    }
    
  render() {
    return (
      <div>
        <Commentstable userComments={this.state.comments}/>
      </div>
    )
  }
}
