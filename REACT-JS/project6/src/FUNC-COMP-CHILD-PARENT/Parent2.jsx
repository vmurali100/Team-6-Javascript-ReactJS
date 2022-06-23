import React from "react";
import { useState } from "react";
import Child2 from "./Child2";

const Parent2 = () => {
    const [usersInfo,setusersInfo] = useState([])
    const receiveddatafromchild=(users)=>{
        setusersInfo(users)
    }
    return (
        <div>
            <Child2 getusers={receiveddatafromchild}/>
            {usersInfo.length > 0 && (<table border={2}>
                <thead>
                    <tr>
                        <th>fname</th>
                        <th>lname</th>

                    </tr>
                </thead>
                <tbody>
                    {users.map((users, i) => {
                        return <tr key={i}>
                            <td>{users.fname}</td>
                            <td>{users.lname}</td>

                        </tr>
                    })}
                </tbody>

            </table>)}
        </div>
    )
}
export default Parent2;