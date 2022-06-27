import axios from 'axios'
import React, { Component } from 'react'

export default class Userschild extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         users:[]
      }
    }
    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/users").then((response)=>{this.setState({users:response.data})})
    }
  render() {
    const {receiveusers}=this.props
    const {users}=this.state
    return (
      <div>
        <button onClick={()=>{receiveusers(users)}}>send data to parent</button>
      </div>
    )
  }
}
