import React, { Component } from 'react'
import Child1 from './Child1'

export default class Parent1 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         posts:[]
      }
    }
    receiveposts=(posts)=>{
        this.setState({posts})
    }
  render() {
    const{receiveposts}=this
    const{posts}=this.state
    return (
      <div>
        <Child1 receiveposts={receiveposts}/>
        <table border={1}>
                <thead>
                    <tr>
                    <th>userId</th>
                        <th>id</th>
                        <th>title</th>
                        <th>body</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map((user,i)=>{
                        return <tr key={i}>
                            <td>{user.userId}</td>
                            <td>{user.id}</td>
                            <td>{user.title}</td>
                            <td>{user.body}</td>
                           
                           
                           
                        </tr>
                    })}
                </tbody>
            </table>
      </div>
    )
  }
}
