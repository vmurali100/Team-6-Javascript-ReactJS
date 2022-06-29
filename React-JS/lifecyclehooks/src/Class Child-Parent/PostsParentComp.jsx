import React, { Component } from 'react'
import PostsChildComp from './PostsChildComp'

export default class PostsParentComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         Posts:[]
      }
    }
    recievePosts=(Posts)=>{
        this.setState({Posts})
    }
  render() {
    const{recievePosts}=this
    const {Posts}=this.state

    return (
      <div>
        <PostsChildComp recievePosts={recievePosts}/>
        <table border="1">
            <thead>
                <tr>
                    <th>userId</th>
                    <th>id</th>
                    <th>tiitle</th>
                    <th>body</th>
                </tr>
            </thead>
            <tbody>
                {Posts.map((user,i)=>{
                    return(
                        <tr key={i}>
                            <td>{user.userId}</td>
                            <td>{user.id}</td>
                            <td>{user.title}</td>
                            <td>{user.body}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
      </div>
    )
  }
}
