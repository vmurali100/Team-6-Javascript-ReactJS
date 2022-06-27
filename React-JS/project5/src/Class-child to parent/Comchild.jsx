import React, { Component } from 'react'
import axios from 'axios'
export default class Comchild extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         comment:[]
      }
    }
    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/comments").then((Response)=>{this.setState({comment:Response.data})})
    }
  render() {
    const{receivecomments}=this.props
    const {comment}=this.state
    return (
      <div>
        <button onClick={()=>{receivecomments(comment)}}>click here</button>
      </div>
    )
  }
}
