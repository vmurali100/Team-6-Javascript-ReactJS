import React, { Component } from 'react'
import axios from 'axios'

export default class AlbumsChildClassComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         albums:[]
      }
    }
    componentDidMount(){
        const url="https://jsonplaceholder.typicode.com/albums";
        axios.get(url).then((response)=>{this.setState({albums:response.data})})
    }
  render() {
    const {recievealbums}=this.props
    const {albums}=this.state
    return (
      <div>
        <button onClick={()=>{recievealbums(albums)}}>Click</button>
      </div>
    )
  }
}
