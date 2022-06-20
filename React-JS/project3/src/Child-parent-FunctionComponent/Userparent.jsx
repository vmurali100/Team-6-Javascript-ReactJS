import { useState } from "react"
import { Userchild } from "./Userchild"

export const Userparent=()=>{
    const[userinfo,setuserinfo]=useState([])
    const receiveuserfromchild=(userdetails)=>{
        setuserinfo(userdetails)
    }
    return(
        <div>
            <Userchild getdata={receiveuserfromchild}/>
            <table border={1}>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>email</th>
                        <th>username</th>
                        <th>password</th>
                        <th>phone</th>
                        <th>__v</th>
                    </tr>
                </thead>
                <tbody>
                    {userinfo.map((user,i)=>{
                        return <tr key={i}>
                            <td>{user.id}</td>
                            <td>{user.email}</td>
                            <td>{user.username}</td>
                            <td>{user.phone}</td>
                            <td>{user.__v}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}
export default Userparent