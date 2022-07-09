import { useState } from "react"
import { FfusersChild11 } from "./FfusersChild11"


export const Ffusers11=()=>{
    const[usersinfo,getusersinfo]=useState([])
    const dataFromUsersChild=(userDetails)=>{
        getusersinfo(userDetails)
    }
    return(
        <div>
           <FfusersChild11 getUsers={dataFromUsersChild}/>
           <p>data from child</p>
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
                    {usersinfo.map((user)=>{
                        return <tr>
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