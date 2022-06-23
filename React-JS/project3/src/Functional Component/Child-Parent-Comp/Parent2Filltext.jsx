import { useState } from "react"
import { Child2Filltext } from "./Child2Filltext"

export const Parent2Filltext = () => {
    const[userInfo,setuserInfo]=useState([])
    const RecieveDatafromChild=(userDetails)=>{
        setuserInfo(userDetails)
    }
    return (
        <div>
            <Child2Filltext getdata={RecieveDatafromChild}/>
            <table border="1">
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
                        return <tr key={i}>
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