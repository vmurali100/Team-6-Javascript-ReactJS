import { useState } from "react"
import { Userchild } from "./Userchild"

export const User=()=>{
    const[userInfo,setuserinfo]=useState([])
    const receiveDataFromChild=(userdetails)=>{
        setuserinfo(userdetails)
    }
    return(
        <div>
            <Userchild getData={receiveDataFromChild}/>
            <table border="1">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>username</th>
                        <th>email</th>
                    </tr>
                </thead>
                <tbody>
                    {userInfo.map((user)=>{
                        return <tr>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}