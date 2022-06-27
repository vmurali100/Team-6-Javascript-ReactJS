import React, { useState } from 'react'
import Commentchild from './Commentchild'

export const Commentparent = () => {
    const [comment,setcomment]=useState([])
    const receivedata=(comment)=>(
        setcomment(comment)
    )
  return (
    <div>
        <Commentchild getdata={receivedata}/>
       {comment.length>0 &&  <table border={1}>
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
                {comment.map((user,i)=>{
                    return <tr key={i}>
                        <td>{user.postId}</td>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.body}</td>
                    </tr>
                })}
            </tbody>
        </table>}
    </div>
  )
}
export default Commentparent