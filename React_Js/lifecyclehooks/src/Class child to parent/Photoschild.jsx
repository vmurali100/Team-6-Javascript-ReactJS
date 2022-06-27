import axios from 'axios'
import React, { Component } from 'react'

export default class Photoschild extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         photos:[]
      }
    }
    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/photos").then((response)=>{this.setState({photos:response.data})})
    }
  render() {
    const {receivephotos}=this.props
    const {photos}=this.state
    return (
      <div>
        <button onClick={()=>{receivephotos(photos)}}>send data to parent</button>
      </div>
    )
  }
}
