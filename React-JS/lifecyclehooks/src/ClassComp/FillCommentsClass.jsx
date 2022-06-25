import React, { Component } from 'react'
import axios from 'axios'
import { FillCommentsClassTable } from './FillCommentsClassTable';

export default class FillCommentsClass extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         Users:[]
      }
    }
    componentDidMount(){
        const Sai="http://localhost:3000/Comments";
        axios.get(Sai).then((response)=>{this.setState({Users:response.data})})
    }
  render() {
    return (
      <div>
        <FillCommentsClassTable allusers={this.state.Users}/>
      </div>
    )
  }
}
