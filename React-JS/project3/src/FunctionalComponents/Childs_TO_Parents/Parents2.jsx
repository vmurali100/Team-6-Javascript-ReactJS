import React from 'react'
import { useState } from 'react';
import Childs2 from './Childs2';
 
const Parents2 = ({ Users }) => {
    const[UsersInfo,setUsersInfo] = useState([])
    const receivedatafromchild=(Users)=>{
        setUsersInfo(Users)
    }
    return (
        <div>
            <Childs2 getUsers={receivedatafromchild}/>
            {UsersInfo.length > 0 && (<table border={2}>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>userId</th>
                        <th>title</th>
                    </tr>
                </thead>
                <tbody>
                    {UsersInfo.map((user, i) => {
                        return <tr key={i}>
                            <td>{user.id}</td>
                            <td>{user.userId}</td>
                            <td>{user.title}</td>
                        </tr>
                    })}
                </tbody>
            </table>
            )}
            
            <ul>
                {UsersInfo.map((user, i) => {
                    return <div className="userinfo">
                        <p>{user.id}</p>
                        <p>{user.userId}</p>
                        <p>{user.title}</p>
                    </div>


                })}
            </ul>
        </div>
    )
}

export default Parents2