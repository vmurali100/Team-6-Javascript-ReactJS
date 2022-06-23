import { useState } from "react"
import { Child3Filltext } from "./Child3Filltext"

export const Parent3Filltext = ()=>{
    const [userinfo,setuserinfo]=useState([])
    const recievedDataFromChild=(userDetails)=>{
        setuserinfo(userDetails)
    }
    return(
        <div>
            <Child3Filltext getdata={recievedDataFromChild}/>
            <table border="1">
                <thead>
                    <tr>
                        <th>fname</th>
                        <th>lname</th>
                    </tr>
                </thead>
                <tbody>
                    {userinfo.map((user,i)=>{
                        return <tr>
                            <td>{user.fname}</td>
                            <td>{user.lname}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}