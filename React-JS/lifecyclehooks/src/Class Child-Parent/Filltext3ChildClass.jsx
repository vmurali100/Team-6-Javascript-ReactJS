import React, { Component } from 'react'
import axios from 'axios'

export default class Filltext3ChildClass extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         Filltext:[]
      }
    }
    componentDidMount(){
        const url ="http://www.filltext.com/?rows=10&fname=%7BfirstName%7D&lname=%7BlastName%7D&pretty=true";
        axios.get(url).then((response)=>{this.setState({Filltext:response.data})})
    }
  render() {
    const {recieveFilltext}=this.props
    const {Filltext}=this.state
    return (
      <div>
        <button onClick={()=>{recieveFilltext(Filltext)}}>senddata parent</button>
      </div>
    )
  }
}
