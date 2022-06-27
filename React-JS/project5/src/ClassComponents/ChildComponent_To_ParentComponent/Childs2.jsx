import axios from 'axios'
import React, { Component } from 'react'

export default class Childs2 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
          Carts:[]
      }
    }
    componentDidMount(){
        const url = "https://fakestoreapi.com/carts"
        axios.get(url).then((response)=>{
            this.setState({Carts:response.data})
        })
    }
  render() {
    const{ReceivedUsers} = this.props
    return (
      <div>
        <p>Childs2</p>
        <button onClick={()=>{ReceivedUsers(this.state.Carts)}}>Send Data Childs To Parents</button>
      </div>
    )
    }
}
 