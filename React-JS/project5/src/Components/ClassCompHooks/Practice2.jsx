import axios from 'axios'
import React, { Component,Albums } from 'react'
import { Practice2_AlbumsTable } from './Practice2_AlbumsTable'

export default class Practice2 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        Albums:[]
      }
    }
    componentDidMount(){
        const url = "https://jsonplaceholder.typicode.com/albums"
        axios.get(url).then((response)=>{
            this.setState({Albums:response.data})
        })
    }
  render() {
    return (
      <div>
        <p>Practice2</p>
        <Practice2_AlbumsTable Albums={this.state.Albums}/>
      </div>
    )
  }
}
