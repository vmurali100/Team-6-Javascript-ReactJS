import { useState } from "react"
import { Commentschild } from "./Commentschild"

export const Commentsparent=()=>{
    const[commentinfo,setcommentinfo]=useState([])
    const receivecommentfromchild=(commentdetails)=>{
        setcommentinfo(commentdetails)
    }
    return(
        <div>
        <Commentschild getdata={receivecommentfromchild}/>
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
                {commentinfo.map((user,i)=>{
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
export default Commentsparent
