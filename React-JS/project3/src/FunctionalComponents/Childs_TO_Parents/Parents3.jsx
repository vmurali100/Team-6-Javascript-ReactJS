import React from 'react'
import { useState } from 'react';
import Childs3 from './Childs3';
 
const Parents3 = () => {
    const[UsersInfo,setUsersInfo] = useState([])
    const receivedatafromchild=(Users)=>{
        setUsersInfo(Users)
    }
    return (
        <div>
            <Childs3 getUsers={receivedatafromchild}/>
            {UsersInfo.length > 0 && (<table border={2}>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>postId</th>
                        <th>name</th>
                        <th>email</th>
                        <th>body</th>
                    </tr>
                </thead>
                <tbody>
                    {UsersInfo.map((user, i) => {
                        return <tr key={i}>
                            <td>{user.id}</td>
                            <td>{user.postId}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.body}</td>
                        </tr>
                    })}
                </tbody>
            </table>
            )}
            
            <ul>
                {UsersInfo.map((user, i) => {
                    return <div className="userinfo" key={i}>
                        <p>{user.id}</p>
                        <p>{user.postId}</p>
                        <p>{user.name}</p>
                        <p>{user.email}</p>
                        <p>{user.body}</p>
                    </div>


                })}
            </ul>
        </div>
    )
}

export default Parents3