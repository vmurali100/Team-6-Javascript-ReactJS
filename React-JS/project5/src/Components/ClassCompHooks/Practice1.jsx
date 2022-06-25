import axios from 'axios'
import React, { Component,users } from 'react'
import { Practice1_CommentsTable } from './Practice1_CommentsTable'

export default class Practice1 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
          users:[]
      }
    }
    componentDidMount(){
        const url = "https://jsonplaceholder.typicode.com/comments"
        axios.get(url).then((response)=>{
            this.setState({users:response.data})
        })
    }
  render() {
    return (
      <div>
        <p>Practice1</p>
       <Practice1_CommentsTable Comments={this.state.users}/>
      </div>
    )
  }
}
