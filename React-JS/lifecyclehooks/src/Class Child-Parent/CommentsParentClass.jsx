import React, { Component } from 'react'
import CommentsChildClass from './CommentsChildClass'

export default class CommentsParentClass extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         Comments:[]
      }
    }
    recieveComments=(Comments)=>{
        this.setState({Comments})
    }
  render() {
    const {recieveComments} = this
    const {Comments} =this.state
    return (
      <div>
        <CommentsChildClass recieveComments={recieveComments}/>
        <table border="1">
            <thead>
                <tr>
                    <th>postId</th>
                    <th>id</th>
                    <th>name</th>
                    <th>email</th>
                    <th>body</th>
                   
                </tr>
            </thead>
            <tbody>
                {Comments.map((user,i)=>{
                    return(
                        <tr key={i}>
                            <td>{user.postId}</td>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
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
