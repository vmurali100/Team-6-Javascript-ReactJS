import React, { Component } from 'react'
import Photchild from './Photchild'

export default class Photparent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         photo:[]
      }
    }
    receivephoto=(photo)=>{
        this.setState({photo})
    }
  render() {
    const{receivephoto}=this
    const {photo}=this.state
    return (
      <div>
        <Photchild receivephoto={receivephoto}/>
        {photo.length>0 && <table border={1}>
            <thead>
                <tr>
                    <th>albumId</th>
                    <th>id</th>
                    <th>title</th>
                    <th>url</th>
                    <th>thumbnailUrl</th>
                </tr>
            </thead>
            <tbody>
                {photo.map((user,i)=>{
                    return <tr key={i}>
                        <td>{user.albumId}</td>
                        <td>{user.id}</td>
                        <td>{user.title}</td>
                        <td>{user.url}</td>
                        <td>{user.thumbnailUrl}</td>
                    </tr>
                })}
            </tbody>
        </table>}
      </div>
    )
  }
}
