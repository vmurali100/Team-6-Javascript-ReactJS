import React, { Component } from 'react'
import axios from 'axios'


export default class Albumschild extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         albums:[]
      }
    }
    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/albums").then((response)=>{this.setState({albums:response.data})})
    }
  render() {
    const {receivealbums} = this.props
    const {albums}=this.state
    return (
      <div>
        <button onClick={()=>{receivealbums(albums)}}>send data to parent</button>
      </div>
    )
  }
}
