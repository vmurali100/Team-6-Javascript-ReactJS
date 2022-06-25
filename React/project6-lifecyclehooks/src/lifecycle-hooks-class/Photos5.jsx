import React, { Component } from 'react'
import axios from 'axios'
import { Photostable } from './Photostable'
export default class Photos5 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         photos:[]
      }
    }
    componentDidMount(){
        const url="http://localhost:3000/photos"
        axios.get(url).then((response)=>{this.setState({photos:response.data})})
    }
  render() {
    return (
      <div>
        <Photostable userPhotos={this.state.photos}/>
      </div>
    )
  }
}
