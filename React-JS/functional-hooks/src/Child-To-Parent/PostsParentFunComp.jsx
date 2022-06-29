import React from 'react'
import { useState } from 'react'
import PostsChildFunComp from './PostsChildFunComp'

export const PostsParentFunComp = () => {
    const [Postsuser ,setPostsuser]=useState([])
    const getdatafromparent=(PostsParentFunComp)=>{
        setPostsuser(PostsParentFunComp)
    }
  return (
    <div>
        <PostsChildFunComp getdata={getdatafromparent}/>
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
                {Postsuser.map((user,i)=>{
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

