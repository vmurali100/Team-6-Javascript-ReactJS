import React, { Component } from 'react'
import Albmchild from './Albmchild'

export default class Albumparent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         album:[]
      }
    }
    receivealbums=(album)=>{
        this.setState({album})
    }
  render() {
    const {receivealbums}=this
    const {album}=this.state
    return (
      <div>
        <Albmchild receivealbums={this.receivealbums}/>
        {album.length>0 && <table border={1}>
            <thead>
                <tr>
                    <th>userId</th>
                    <th>id</th>
                    <th>title</th>
                </tr>
            </thead>
            <tbody>
                {album.map((user,i)=>{
                    return <tr>
                        <td>{user.userId}</td>
                        <td>{user.id}</td>
                        <td>{user.title}</td>
                    </tr>
                })}
            </tbody>
        </table>}
      </div>
    )
  }
}
