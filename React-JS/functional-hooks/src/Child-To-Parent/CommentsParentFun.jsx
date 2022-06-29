import React from 'react'
import { useState } from 'react'
import { CommentsChildFun } from './CommentsChildFun'

export const CommentsParentFun = () => {
    const [Commentsusers,setCommentsusers]=useState([])
    const getdatafromchild=(CommentsParentFun)=>{
        setCommentsusers(CommentsParentFun)
    }
  return (
    <div>
        <CommentsChildFun getdata={getdatafromchild}/>
        <table border="1">
            <thead>
                <tr>
                    <th>postId</th>
                    <th>id</th>
                    <th>name</th>
                    <th>title</th>
                    <th>body</th>
                </tr>
            </thead>
            <tbody>
                {Commentsusers.map((user,i)=>{
                    return(
                        <tr key={i}>
                            <td>{user.postId}</td>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
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
