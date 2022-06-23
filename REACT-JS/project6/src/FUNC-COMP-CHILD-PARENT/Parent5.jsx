import React from "react";
import { useState } from "react";
import Child5 from "./Child5";

const Parent5 = () => {
    const [usersInfo,setusersInfo] = useState([])
    const receiveddatafromchild=(users)=>{
        setusersInfo(users)
    }
    return (
        <div>
            <Child5 getusers={receiveddatafromchild}/>
            {users.length >0 && (<table border={2}>
                <thead>
                    <tr>
                        <th>userId</th>
                        <th>id</th>
                        <th>title</th>
                        <th>completed</th>
                        
                        
                    </tr>
                </thead>
                <tbody>
                    {users.map((users,i)=>{
                        return<tr key={i}>
                            <td>{users.userId}</td>
                            <td>{users.id}</td>
                            <td>{users.title}</td>
                            <td>{users.completed}</td>
                           
                        </tr>
                    })}
                </tbody>

            </table>)}
        </div>
    )
}
export default Parent5;