import React, { Component } from 'react'
import axios from 'axios'
import JsonPlaceHolderUser from './JsonPlaceHolderUser'

export default class JsonplaceHoledercomp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         users:[]
      }
    }
    componentDidMount(){
        const url="http://localhost:3000/jsonusers"
        axios.get(url).then((respons)=>{this.setState({users:respons.data})})
    }
  render() {
    return (
      <div>
        <JsonPlaceHolderUser jsonusers={this.state.users}/>
      </div>
    )
  }
}
