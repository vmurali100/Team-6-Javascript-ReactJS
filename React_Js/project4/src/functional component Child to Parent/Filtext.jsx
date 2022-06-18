import { useState } from "react"
import { Filtextchild } from "./Filltextchild"

export const Filtext=()=>{
    const[userInfo,setuserinfo]=useState([])
    const recieveDataFromChild=(userdetails)=>{
        setuserinfo(userdetails)
    }
    return(
        <div>
            <Filtextchild getData={recieveDataFromChild}/>
            <table border={1}>
                <thead>
                    <tr>
                        <th>fname</th>
                        <th>lname</th>
                    </tr>
                </thead>
                <tbody>
                    {userInfo.map((user,i)=>{
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