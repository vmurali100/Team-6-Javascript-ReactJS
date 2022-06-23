import { useState } from "react"
import { Filltext2Child } from "./Filltext2Child"

export const Filltext2 =()=>{
    const [UserInfo,setUserInfo]=useState([])
    const recieveDetailsFromChild = (UserDetails)=>{
        setUserInfo(UserDetails)
    }

    return(
        <div>
            <Filltext2Child getData={recieveDetailsFromChild}/>
            <table border="1">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>email</th>
                        <th>username</th>
                        <th>password</th>
                    </tr>
                </thead>
                <tbody>
                    {UserInfo.map((user,i)=>{
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
