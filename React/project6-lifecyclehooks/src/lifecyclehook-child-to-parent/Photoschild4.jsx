import axios from 'axios'
import React, { Component } from 'react'

export default class Photoschild4 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        photos:[]
      }
    }
    componentDidMount(){
        axios.get("http://localhost:3000/photos").then((response)=>{this.setState({photos:response.data})})
    }
  render() {
    return (
      <div>
        <button onClick={()=>{this.props.receivePhotos(this.state.photos)}}>get photos</button>
      </div>
    )
  }
}
