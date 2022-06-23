import React from "react";
import { useState } from "react";
import Child3 from "./Child3";

const Parent3 = () => {
    const [usersInfo,setusersInfo] = useState([])
    const receiveddatafromchild=(users)=>{
        setusersInfo(users)
    }
    return (
        <div>
            <Child3 getusers={receiveddatafromchild}/>
            {users.length > 0 && (<table border={2}>
                <thead>
                    <tr>
                        <th>userId</th>
                        <th>id</th>
                        <th>title</th>
                        <th>body</th>

                    </tr>
                </thead>
                <tbody>
                    {users.map((users, i) => {
                        return <tr key={i}>
                            <td>{users.userId}</td>
                            <td>{users.id}</td>
                            <td>{users.title}</td>
                            <td>{users.body}</td>

                        </tr>
                    })}
                </tbody>

            </table>)}
        </div>
    )
}
export default Parent3;