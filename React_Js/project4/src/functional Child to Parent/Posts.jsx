import { useState } from "react"
import { Postschild } from "./Postschild"

export const Posts =()=>{
    const[postinfo,setpostinfo]=useState([])
    const receivepostfromchild=(postdetails)=>{
        setpostinfo(postdetails)
    }
    return(
        <div>
            <Postschild getdata={receivepostfromchild}/>
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
                    {postinfo.map((user,i)=>{
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
