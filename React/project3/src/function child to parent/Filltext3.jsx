import { useState } from "react"
import { FilltextChild3 } from "./FilltextChild3"

export const Filltext3=()=>{
    const[filltextInfo,setfilltextInfo]=useState([])
    const getDataFromChild=(filltextUserDetails)=>{
        setfilltextInfo(filltextUserDetails)
    }
    return(
        <div>
            <FilltextChild3 getData={getDataFromChild}/>
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
                    {filltextInfo.map((user)=>{
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