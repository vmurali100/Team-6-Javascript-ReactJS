import { useState } from "react"
import { FpostsChild4 } from "./FpostsChild4"

export const Fposts4 =()=>{
    const[postsinfo,setpostsinfo]=useState([])
    const recievePostsFromChild=(postsdetails)=>{
        setpostsinfo(postsdetails)
    }
    return(
        <div>
            <FpostsChild4 getPosts={recievePostsFromChild}/>
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
                    {postsinfo.map((user)=>{
                        return <tr>
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