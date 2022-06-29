import React, { Component } from 'react'
import axios from 'axios'

export default class PostsChildComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         Posts:[]
      }
    }

    componentDidMount(){
        const url ="https://jsonplaceholder.typicode.com/posts";

         axios.get(url).then((response)=>(this.setState({Posts:response.data})))
    }
    
  render() {
    const {recievePosts} = this.props
    const {Posts}=this.state
    return (
      <div>
        <button onClick={()=>{recievePosts(Posts)}}>senddatatoParent</button>
      </div>
    )
  }
}
