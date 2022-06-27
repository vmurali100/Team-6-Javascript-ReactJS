import React, { Component } from 'react'
import axios from 'axios'

export default class Cartschild3 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         carts:[]
      }
    }
    componentDidMount(){
        axios.get("http://localhost:3000/carts").then((response)=>{this.setState({carts:response.data})})
    }
  render() {
    const{receivecarts}=this.props
    const{carts}=this.state
    return (
      <div>
       <button onClick={()=>{receivecarts(carts)}}>send data to parent</button>
      </div>
    )
  }
}
