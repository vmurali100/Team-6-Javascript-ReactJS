import React, { Component } from 'react'
import axios from 'axios'
import { JsonPlaceholdeUsers } from './JsonPlaceholdeUsers';

export default class JsonPlaceholderComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         users:[]
      }
    }

    componentDidMount(){
        const url="  http://localhost:3000/jsonUsers";
        axios.get(url).then((response)=>{this.setState({users:response.data})})
    }
  render() {
    return (
      <div>
        <JsonPlaceholdeUsers jsonUsers={this.state.users}/>
      </div>
    )
  }
}
