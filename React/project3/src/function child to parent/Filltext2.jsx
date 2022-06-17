import { useState } from "react"
import { FilltextChild2 } from "./FilltextChild2"

export const Filltext2 = () => {
    const [userInfo, setuserinfo] = useState([])
    const recieveDataFromChild = (userdetails) => {
        setuserinfo(userdetails)
    }
    return (
        <div>
            <FilltextChild2 getData={recieveDataFromChild} />

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