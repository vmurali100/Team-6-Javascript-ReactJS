import axios from 'axios'
import React, { Component } from 'react'

export default class Childs3 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        Photos:[]
      }
    }
    componentDidMount(){
        const url = "https://jsonplaceholder.typicode.com/photos"
        axios.get(url).then((response)=>{
            this.setState({Photos:response.data})
        })
    }
  render() {
    const{ReceivedUsers} = this.props
    return (
      <div>
        <p>Childs3</p>
        <button onClick={()=>{ReceivedUsers(this.state.Photos)}}>Send Data Childs To Parents</button>
      </div>
    )
    }
}
 