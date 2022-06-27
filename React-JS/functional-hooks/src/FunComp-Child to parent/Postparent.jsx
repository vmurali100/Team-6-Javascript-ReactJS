import React, { useState } from 'react'
import { Postchild } from './Postchild'

export const Postparent = () => {
    const [post, setpost] = useState([])
    const receivedata=(post)=>(
        setpost(post)
    )
  return (
    <div>
        <Postchild getdata={receivedata}/>
        {post.length>0 && <table border={1}>
            <thead>
                <tr>
                    <th>userId</th>
                    <th>id</th>
                    <th>title</th>
                    <th>body</th>
                </tr>
            </thead>
            <tbody>
                {post.map((user,i)=>{
                    return <tr key={i}>
                        <td>{user.userId}</td>
                        <td>{user.id}</td>
                        <td>{user.title}</td>
                        <td>{user.body}</td>
                    </tr>
                })}
            </tbody>
        </table>}
    </div>
  )
}
export default Postparent
