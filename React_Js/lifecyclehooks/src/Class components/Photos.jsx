import axios from 'axios'
import React, { Component } from 'react'
import Photostable from './Photostable'

export default class Photos extends Component {
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
    return (
      <div>
        <Photostable photos={this.state.photos}/>
      </div>
    )
  }
}
