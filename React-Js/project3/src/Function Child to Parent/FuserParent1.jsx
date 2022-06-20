import { useState } from "react"
import { FuserChild1 } from "./FuserChild1"

export const FuserParent1 =()=>{
    const[usersinfo, getUsersinfo]=useState([])
    const dataFromUsersChild=(userDetails)=>{
        getUsersinfo(userDetails)
    }

    return(
        <div>
            <FuserChild1 getData={dataFromUsersChild}/>
            <p>Data from Filltext User Child</p>
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