import React from 'react'
import { useState } from 'react';

const Childs5 = ({ Users }) => {
    const [] = useState()
    return (
        <div>
            {Users.length > 0 && (<table border={2}>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>userId</th>
                        <th>title</th>
                    </tr>
                </thead>
                <tbody>
                    {Users.map((user, i) => {
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
                {Users.map((user, i) => {
                    return <div className="userinfo" key={i}>
                        <p>{user.id}</p>
                        <p>{user.userId}</p>
                        <p>{user.title}</p>
                    </div>


                })}
            </ul>
        </div>
    )
}

export default Childs5