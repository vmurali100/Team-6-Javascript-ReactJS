import React, { Component } from 'react'
import axios from 'axios'
import { HocCompo } from './HocCompo'



 class Users extends Component {
    
  render() {
    const {Users,handleDelete}=this.props

    console.log(this.props)
    return (
      <div>
          <table border={1}>
            <thead>
                <tr>
                    <th>id</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Image</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
            {Users.map((user,i)=>{
              return <tr key={i}>
                <td>{user.id}</td>
                <td>{user.title}</td>
                <td>{user.price}</td>
                <td>{user.description}</td>
                <td>{user.category}</td>
                <td><img src={user.image} alt=""/></td>
                <td><button>Edit</button></td>
                <td><button >Delete</button></td>
              </tr>
            })}
            </tbody>
          </table>
      </div>
    )
  }
}
export default HocCompo(Users)



