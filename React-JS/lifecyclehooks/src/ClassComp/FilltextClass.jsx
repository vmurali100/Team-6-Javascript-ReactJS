import React, { Component } from 'react'
import axios from "axios"
import { FilltextTable } from './FilltextTable';


export default class FilltextClass extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         user:[],
      }
    }

    componentDidMount(){
        
        const url="http://www.filltext.com/?rows=10&id=%7Bindex%7D&email=%7Bemail%7D&username=%7Busername%7D&password=%7BrandomString%7C5%7D&pretty=true";
        axios.get(url).then((response)=>{this.setState({user:response.data})})        
        
    }
  render() {
    return (
      <div>
               <FilltextTable allusers={this.state.user}/>
      </div>
    )
  }
}
