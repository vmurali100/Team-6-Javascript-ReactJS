import React, { Component } from 'react'
import axios from 'axios'
import { Cartstable } from './Cartstable'
export default class 
 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         carts:[]
      }
    }
    componentDidMount(){
        const url="http://localhost:3000/carts"
     axios.get(url).then((response)=>{this.setState({carts:response.data})})
    }
  render() {
    return (
      <div>
        <Cartstable  usercarts={this.state.carts}/>
      </div>
    )
  }
}
