import { useState } from "react"
import { FuserChild3 } from "./FuserChild3"

export const FuserParent3 = () => {
    const [userInfo, getuserinfo] = useState([])
    const recieveDataFromChild = (userdetails) => {
        getuserinfo(userdetails)
    }
    return (
        <div>
            <FuserChild3 getData={recieveDataFromChild} />
            <h3>Data From Filletext Users Child</h3>
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