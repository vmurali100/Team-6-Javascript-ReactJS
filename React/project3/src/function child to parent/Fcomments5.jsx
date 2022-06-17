import { useState } from "react"
import { Fcommentschild5 } from "./Fcommentschild5"

export const Fcomments5=()=>{
    const[commentsinfo,getcommentsinfo]=useState([])
    const getCommentsFromChild=(commentdetails)=>{
        getcommentsinfo(commentdetails)
    }
    return(
        <div>
            <Fcommentschild5 getComments={getCommentsFromChild}/>
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
                    {commentsinfo.map((user)=>{
                        return <tr>
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