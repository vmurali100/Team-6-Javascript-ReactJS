import React, { Component } from 'react'
import axios from 'axios'

export default class TodosChildClass extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         Todos:[]
      }
    }
    componentDidMount(){
        const url="https://jsonplaceholder.typicode.com/todos";
        axios.get(url).then((response)=>{this.setState({Todos:response.data})})

    }

  render() {
    const {recieveTodos}=this.props
    const {Todos}=this.state
    return (
      <div>
        <button onClick={()=>{recieveTodos(Todos)}}>Click</button>
      </div>
    )
  }
}
