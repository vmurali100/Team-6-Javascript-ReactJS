import { useState } from "react"
import { Commentchild } from "./Commentchild"

export const Comment =()=>{
    const[commentInfo,setcommentinfo]=useState([])
    const receivecommentfromchild=(commentdetails)=>{
        setcommentinfo(commentdetails)
    }
    return(
        <div>
            <Commentchild getData={receivecommentfromchild}/>
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
                    {commentInfo.map((user,i)=>{
                        return<tr>
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