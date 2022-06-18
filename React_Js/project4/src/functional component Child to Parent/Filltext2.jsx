import { useState } from "react"
import { Filltextchild2 } from "./Filltextchild2"

export const Filltext2=()=>{
    const[userInfo,setuserinfo]=useState([])
    const recieveDataFromChild=(userdetails)=>{
        setuserinfo(userdetails)
    }
    return(
        <div>
            <Filltextchild2 getData={recieveDataFromChild}/>
            <table border={1}>
                <thead>
                    <tr>
                        <th>fname</th>
                        <th>lname</th>
                        <th>tel</th>
                        <th>address</th>
                        <th>city</th>
                        <th>state</th>
                        <th>zip</th>
                    </tr>
                </thead>
                <tbody>
                    {userInfo.map((user,i)=>{
                        return <tr>
                            <td>{user.fname}</td>
                            <td>{user.lname}</td>
                            <td>{user.tel}</td>
                            <td>{user.address}</td>
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