import { useState } from "react"
import { Filltext3Child } from "./Filltext3Child"

export const Filltext3 =()=>{
    const [userinfo,setUserinfo]=useState([])
    const recieveDetailsFromChild=(userDetails)=>{
        setUserinfo(userDetails)
    }
    return(
<div>
    <Filltext3Child GetData={recieveDetailsFromChild}/>


    <table border="1">
        <thead>
            <tr>
                <th>fname</th>
                <th>lname</th>
                <th>tel</th>
                <th>city</th>
                <th>state</th>
                <th>zip</th>
            </tr>
        </thead>
        <tbody>
            {userinfo.map((user,i)=>{
                return <tr>
                    <td>{user.fname}</td>
                    <td>{user.lname}</td>
                    <td>{user.tel}</td>
                    <td>{user.city}</td>
                    <td>{user.state}</td>
                    <td>{user.zip}</td>
                </tr>
            })}
        </tbody>
    </table>
</div>
    )
}