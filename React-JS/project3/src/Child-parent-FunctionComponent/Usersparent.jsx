import { useState } from "react"
import { Userschild } from "./Userschild"

export const Usersparent=()=>{
    const[usersinfo,setuserinfo]=useState([])
    const receiveuserfromchild=(usersdetails)=>{
        setuserinfo(usersdetails)
    }
    return(
        <div>
            <Userschild getdata={receiveuserfromchild}/>
            <table border={1}>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>username</th>
                        <th>email</th>
                        <th>phone</th>
                        <th>website</th>
                    </tr>
                </thead>
                <tbody>
                    {usersinfo.map((user,i)=>{
                        return <tr key={i}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>{user.website}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}