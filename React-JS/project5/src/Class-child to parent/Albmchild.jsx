import React, { Component } from 'react'
import axios from 'axios'
export default class Albmchild extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         album:[]
      }
    }
    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/albums").then((Response)=>{this.setState({album:Response.data})})
    }
  render() {
    const{receivealbums}=this.props
    const{album}=this.state
    return (
      <div>
        <button onClick={()=>{receivealbums(album)}}>click me</button>
      </div>
    )
  }
}
