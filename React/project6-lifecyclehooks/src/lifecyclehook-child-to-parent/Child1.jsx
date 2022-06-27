import axios from 'axios'
import React, { Component } from 'react'

export default class Child1 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         posts:[]
      }
    }
    componentDidMount(){
        const url="https://jsonplaceholder.typicode.com/posts"
      axios.get(url).then((response)=>{this.setState({posts:response.data})})

    }
  render() {
    return (
      <div>
      
        <button onClick={()=>{this.props.receiveposts(this.state.posts)}}>getData</button>
   
      
      </div>
    )
  }
}
