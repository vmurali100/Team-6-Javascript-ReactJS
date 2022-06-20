import { useState } from "react"
import { PostsChild } from "./PostsChild"

export const PostsParent =()=>{
    const[postsinfo,setpostsinfo]=useState([])
    const recievePostsFromChild=(postsdetails)=>{
        setpostsinfo(postsdetails)
    }
    return(
        <div>
            <PostsChild getPosts={recievePostsFromChild}/>
            <h3>Data From Posts Child</h3>
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
                    {postsinfo.map((user,i)=>{
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