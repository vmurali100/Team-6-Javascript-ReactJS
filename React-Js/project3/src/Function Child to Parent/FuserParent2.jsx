import { useState } from "react"
import { FuserChild2 } from "./FuserChild2"

export const FuserParent2=()=>{
    const[usersInfo,getusersinfo]=useState([])
    const dataFromUsersChild=(userDetails)=>{
        getusersinfo(userDetails)
    }
    return(
        <div>
           <FuserChild2 getUsers={dataFromUsersChild}/>
           <p>Data From Filltext User Child</p>
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
                    {usersInfo.map((user)=>{
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