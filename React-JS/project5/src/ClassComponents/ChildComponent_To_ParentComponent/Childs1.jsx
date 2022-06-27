import axios from 'axios'
import React, { Component } from 'react'

export default class Childs1 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
          Albums:[]
      }
    }
    componentDidMount(){
        const url = "https://jsonplaceholder.typicode.com/albums"
        axios.get(url).then((response)=>{
            this.setState({Albums:response.data})
        })
    }
  render() {
    const{ReceivedUsers} = this.props
    return (
      <div>
        <p>Childs1</p>
        <button onClick={()=>{ReceivedUsers(this.state.Albums)}}>Send Data Childs To Parents</button>
      </div>
    )
    }
}
 