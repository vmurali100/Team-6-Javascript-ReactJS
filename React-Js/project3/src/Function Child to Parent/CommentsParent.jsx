import { useState } from "react"
import { CommentsChild } from "./CommentsChild"

export const CommentsParent=()=>{
    const[commentsinfo,getcommentsinfo]=useState([])
    const getCommentsFromChild=(commentDetails)=>{
        getcommentsinfo(commentDetails)
    }
    return(
        <div>
            <CommentsChild getComments={getCommentsFromChild}/>
            <table border={1}>
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
                    {commentsinfo.map((user,i)=>{
                        return <tr key={i}>
                            <td>{user.postId}</td>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.body}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}