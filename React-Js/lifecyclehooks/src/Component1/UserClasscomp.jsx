import React, { Component } from 'react'
import axios from 'axios'
import { Userstable } from './Userstable'

export default class UserClasscomp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         users:[]
      }
    }
    componentDidMount(){
        const url="https://jsonplaceholder.typicode.com/posts"
        axios.get(url).then((respons)=>{this.setState({users:respons.data})})
    }
  render() {
    return (
      <div>
        <Userstable filltextUsers={this.state.users}/>
      </div>
    )
  }
}
