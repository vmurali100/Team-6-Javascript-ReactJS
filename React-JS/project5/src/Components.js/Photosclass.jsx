import React, { Component } from 'react'
import Photostable from './Photostable'
import axios from 'axios'
export default class Photosclass extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         photo:[]
      }
    }
    componentDidMount(){
        const url="http://localhost:3000/photos"
        axios.get(url).then((Response)=>{this.setState({photo:Response.data})})
    }
  render() {
    return (
      <div>
        <Photostable pho={this.state.photo}/>
      </div>
    )
  }
}

