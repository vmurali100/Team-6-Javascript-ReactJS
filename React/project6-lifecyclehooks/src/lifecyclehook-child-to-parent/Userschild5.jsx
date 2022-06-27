import axios from 'axios'
import React, { Component } from 'react'

export default class Userschild5 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        users:[]
      }
    }
    componentDidMount(){
        axios.get("http://localhost:3000/users2").then((response)=>{this.setState({users:response.data})})
    }
  render() {
    return (
      <div>
        <button onClick={()=>{this.props.receivedata(this.state.users)}}>get users</button>
      </div>
    )
  }
}
