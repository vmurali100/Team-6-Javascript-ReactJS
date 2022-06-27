import axios from 'axios'
import React, { Component } from 'react'

export default class Productschild extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         products:[]
      }
    }
    componentDidMount(){
        axios.get("https://fakestoreapi.com/products").then((response)=>{this.setState({products:response.data})})
    }
  render() {
    const {receiveproducts}=this.props
    const {products}=this.state
    return (
      <div>
        <button onClick={()=>{receiveproducts(products)}}>send data to parent</button>
      </div>
    )
  }
}
