import React, { Component } from 'react'
import axios from 'axios'
import { Poststable1 } from './Poststable1'
export default class Posts1 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         posts:[]
      }
    }
    componentDidMount(){
        const url="http://localhost:3000/posts"
        axios.get(url).then((response)=>{this.setState({posts:response.data})})
    }
  render() {
    return (
      <div>
        <Poststable1 userPosts={this.state.posts}/>
      </div>
    )
  }
}
