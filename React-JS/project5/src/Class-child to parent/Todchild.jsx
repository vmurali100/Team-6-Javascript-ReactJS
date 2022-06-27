import React, { Component } from 'react'
import axios from 'axios'
export default class Todchild extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         todos:[]
      }
    }
    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/todos").then((Response)=>{this.setState({todos:Response.data})})
    }
  render() {
    const {receivetodos}=this.props
    const {todos}=this.state
    return (
      <div>
        <button onClick={()=>{receivetodos(todos)}}>click me</button>
      </div>
    )
  }
}
