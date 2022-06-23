import React from "react";
import { useState } from "react";
import Child4 from "./Child4";

const Parent4 = () => {
    const [usersInfo,setusersInfo] = useState([])
    const receiveddatafromchild=(users)=>{
        setusersInfo(users)
    }
    return (
        <div>
            <Child2 getusers={receiveddatafromchild}/>
            {users.length > 0 && (<table border={2}>
                <thead>
                    <tr>
                        <th>postId</th>
                        <th>id</th>
                        <th>name</th>
                        <th>email</th>
                        <th>body</th>

                    </tr>
                </thead>
                <tbody>
                    {users.map((users, i) => {
                        return <tr key={i}>
                            <td>{users.postId}</td>
                            <td>{users.id}</td>
                            <td>{users.name}</td>
                            <td>{users.email}</td>
                            <td>{users.body}</td>
                           
                        </tr>
                    })}
                </tbody>

            </table>)}
        </div>
    )
}
export default Parent4;