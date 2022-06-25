import React, { Component } from 'react'
import axios from "axios"
import { FillTextUsersSaiTable } from './FillTextUsersSaiTable';

export default class FillTextUsersSai extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
          users:[]
      }
    }

    componentDidMount(){
         const url=" http://localhost:3000/Filltext3";
         axios.get(url).then((response)=>{this.setState({users:response.data})})
    }
  render() {
    return (
      <div>
        <FillTextUsersSaiTable FilltextUsers={this.state.users}/>
      </div>
    )
  }
}
