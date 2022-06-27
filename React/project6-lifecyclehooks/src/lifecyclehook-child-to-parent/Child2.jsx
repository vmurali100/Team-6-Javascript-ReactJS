import axios from 'axios'
import React, { Component } from 'react'

export default class Child2 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        filltext1:[]
      }
    }
    componentDidMount(){
        const url=" http://www.filltext.com/?rows=10&id={index}&email={email}&username={username}&password={randomString|5}&pretty=true"
        axios.get(url).then((response)=>{this.setState({filltext1:response.data})})
    }
  render() {
    return (
      <div>
        <button onClick={()=>{this.props.receivedetails(this.state.filltext1)}}>get users from child</button>
      </div>
    )
  }
}
