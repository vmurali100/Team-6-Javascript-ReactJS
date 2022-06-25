import React, { Component } from 'react'
import Todostable from './Todostable'
import axios from 'axios'
export default class Todosclass extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         todos:[]
      }
    }
    componentDidMount(){
        const url="https://jsonplaceholder.typicode.com/todos"
        axios.get(url).then((Response)=>{this.setState({todos:Response.data})})
    }
  render() {
    return (
      <div>
        <Todostable tod={this.state.todos}/>
      </div>
    )
  }
}
