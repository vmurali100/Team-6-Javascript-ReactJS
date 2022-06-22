import React from 'react'
import { useState } from 'react';
import Childs4 from './Childs4';
 
const Parents4 = () => {
    const[UsersInfo,setUsersInfo] = useState([])
    const receivedatafromchild=(Users)=>{
        setUsersInfo(Users)
    }
    return (
        <div>
            <Childs4 getUsers={receivedatafromchild}/>
            {UsersInfo.length > 0 && (<table border={2}>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>address</th>
                        <th>email</th>
                        <th>username</th>
                        <th>password</th>
                        <th>name</th>
                        <th>phone</th>
                        <th>__v</th>
                    </tr>
                </thead>
                <tbody>
                    {UsersInfo.map((user, i) => {
                        return <tr key={i}>
                            <td>{user.id}</td>
                            {/* <td>{user.address}</td> */}
                            <td>{user.email}</td>
                            <td>{user.username}</td>
                            <td>{user.password}</td>
                            {/* <td>{user.name}</td> */}
                            <td>{user.phone}</td>
                            <td>{user.__v}</td>
                        </tr>
                    })}
                </tbody>
            </table>
            )}
            
            {/* <ul>
                {UsersInfo.map((user, i) => {
                    return <div className="userinfo">
                        <p>{user.fname}</p>
                        <p>{user.lname}</p>
                        <p>{user.tel}</p>
                        <p>{user.address}</p>
                        <p>{user.city}</p>
                        <p>{user.state}</p>
                        <p>{user.zip}</p>
                    </div>


                })}
            </ul> */}
        </div>
    )
}

export default Parents4