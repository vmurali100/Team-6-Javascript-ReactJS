import axios from 'axios'
import React, { Component } from 'react'
import Albumstable from './Albumstable'

export default class Albums extends Component {
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
    return (
      <div>
        <Albumstable albums={this.state.albums}/>
      </div>
    )
  }
}
