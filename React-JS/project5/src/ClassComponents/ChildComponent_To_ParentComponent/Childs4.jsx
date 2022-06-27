import axios from 'axios'
import React, { Component } from 'react'

export default class Childs4 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        Filltext1:[]
      }
    }
    componentDidMount(){
        const url = "http://www.filltext.com/?rows=10&fname=%7BfirstName%7D&lname=%7BlastName%7D&pretty=true"
        axios.get(url).then((response)=>{
            this.setState({Filltext1:response.data})
        })
    }
  render() {
    const{ReceivedUsers} = this.props
    return (
      <div>
        <p>Childs4</p>
        <button onClick={()=>{ReceivedUsers(this.state.Filltext1)}}>Send Data Childs To Parents</button>
      </div>
    )
    }
}
 