import { useState } from "react"
import { Filltext4Child } from "./Filltext4Child"

export const Filltext4 =()=>{
    const [userinfo,setUserinfo]=useState([])
    const recieveDetailsFromChild = (userdata)=>{
        setUserinfo(userdata)
    }

    return(
        <div>
            {/* <Filltext4Child getdata={recieveDetailsFromChild}/> */}
            <Filltext4Child  getdata={recieveDetailsFromChild}/>
        <p>data from child</p>

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
