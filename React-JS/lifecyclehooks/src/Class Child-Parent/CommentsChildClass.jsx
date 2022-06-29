import React, { Component } from 'react'
import axios from 'axios'

export default class CommentsChildClass extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         Comments:[]
      }
    }
    componentDidMount(){
        const url ="https://jsonplaceholder.typicode.com/comments";
        axios.get(url).then((response)=>{this.setState({Comments:response.data})})
    }
  render() {
    const {recieveComments}=this.props
    const {Comments}=this.state
    return (
      <div>
        <button onClick={()=>{recieveComments(Comments)}}>senddatatoparent</button>
      </div>
    )
  }
}
