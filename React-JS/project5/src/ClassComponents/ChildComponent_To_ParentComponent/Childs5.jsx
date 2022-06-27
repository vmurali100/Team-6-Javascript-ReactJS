import axios from 'axios'
import React, { Component } from 'react'

export default class Childs5 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        Filltext2:[]
      }
    }
    componentDidMount(){
        const url = "http://www.filltext.com/?rows=10&id={index}&email={email}&username={username}&password={randomString|5}&pretty=true"
        axios.get(url).then((response)=>{
            this.setState({Filltext2:response.data})
        })
    }
  render() {
    const{ReceivedUsers} = this.props
    return (
      <div>
        <p>Childs5</p>
        <button onClick={()=>{ReceivedUsers(this.state.Filltext2)}}>Send Data Childs To Parents</button>
      </div>
    )
    }
}
 