import React, { Component } from 'react'
import axios from "axios"
import { TodosClassTable } from './TodosClassTable';

export default class TodosClassComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         Users:[]
      }
    }

    componentDidMount(){
        const url="  http://localhost:3000/Todos";
        axios.get(url).then((response)=>{this.setState({Users:response.data})})
    }
  render() {
    return (
      <div>
        <TodosClassTable TodosUsers={this.state.Users}/>
      </div>
    )
  }
}
