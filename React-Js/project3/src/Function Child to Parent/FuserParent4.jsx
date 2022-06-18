import { useState } from "react"
import { FuserChild4 } from "./FuserChild4"

export const FuserParent4 = ()=>{
    const[filltextInfo,setfilltextInfo]=useState([])
    const getDataFromChild=(userDetails)=>{
        setfilltextInfo(userDetails)
    }
    return(
        <div>
            <FuserChild4 getData={getDataFromChild}/>
            <h3>Data From Users Child</h3>
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