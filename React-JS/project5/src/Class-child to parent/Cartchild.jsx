import React, { Component } from 'react'
import axios from "axios"
export default class Cartchild extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         cart:[]
      }
    }
    componentDidMount(){
        axios.get("https://fakestoreapi.com/carts").then((response)=>{this.setState({cart:response.data})})
    }
  render() {
    const {recivecart}=this.props
    const {cart}=this.state
    return (
      <div>
        <button onClick={()=>{recivecart(cart)}}>click me</button>
      </div>
    )
  }
}
