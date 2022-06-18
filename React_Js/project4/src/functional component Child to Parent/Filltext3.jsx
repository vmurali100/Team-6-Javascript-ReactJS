import { useState } from "react"
import { Filltextchild3 } from "./Filltextchild3"

export const Filltext3=()=>{
    const[userInfo,setuserinfo]=useState([])
    const recieveDataFromChild=(userdetails)=>{
        setuserinfo(userdetails)
    }
    return(
        <div>
            <Filltextchild3 getData={recieveDataFromChild}/>
            <table border={1}>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>email</th>
                        <th>username</th>
                        <th>password</th>
                    </tr>
                </thead>
                <tbody>
                    {userInfo.map((user,i)=>{
                        return <tr>
                            <td>{user.id}</td>
                            <td>{user.email}</td>
                            <td>{user.username}</td>
                            <td>{user.password}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}