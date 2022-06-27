import React, { Component } from 'react'
import axios from 'axios'
export default class Photchild extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         photo:[]
      }
    }
    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/photos").then((Response)=>{this.setState({photo:Response.data})})
    }
  render() {
    const{receivephoto}=this.props
    const{photo}=this.state
    return (
      <div>
        <button onClick={()=>{receivephoto(photo)}}>click me i have table</button>
      </div>
    )
  }
}
