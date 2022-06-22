import React from 'react'
import { useState } from 'react';

const Childs2 = ({ Users }) => {
    const [] = useState()
    return (
        <div>
            {Users.length > 0 && (<table border={2}>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>username</th>
                        <th>email</th>
                        <th>address</th>
                        <th>phone</th>
                        <th>website</th>
                        <th>company</th>
                    </tr>
                </thead>
                <tbody>
                    {Users.map((user, i) => {
                        return <tr key={i}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            {/* <td>{user.address}</td> */}
                            <td>{user.phone}</td>
                            <td>{user.website}</td>
                            {/* <td>{user.company}</td> */}
                        </tr>
                    })}
                </tbody>
            </table>
            )}
            <ul>
                {Users.map((user, i) => {
                    return <div className="userinfo" key={i}>
                        <p>{user.id}</p>
                        <p>{user.name}</p>
                        <p>{user.username}</p>
                        <p>{user.email}</p>
                        {/* <p>{user.address}</p> */}
                        <p>{user.phone}</p>
                        <p>{user.website}</p>
                        {/* <p>{user.company}</p> */}
                    </div>


                })}
            </ul>
        </div>
    )
}

export default Childs2