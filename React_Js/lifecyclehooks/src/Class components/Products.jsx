import axios from 'axios'
import React, { Component } from 'react'
import Productstable from './Productstable'

export default class Products extends Component {
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
    return (
      <div>
        <Productstable products={this.state.products} />
      </div>
    )
  }
}
