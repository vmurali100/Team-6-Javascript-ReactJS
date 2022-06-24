import React from 'react'
import { useState } from 'react';
 
const Parents5 = ({ Users }) => {
    const [] = useState()
    return (
        <div>
            {Users.length > 0 && (<table border={2}>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>userId</th>
                        <th>date</th>
                        <th>products</th>
                        <th>__v</th>
                    </tr>
                </thead>
                <tbody>
                    {Users.map((user, i) => {
                        return <tr key={i}>
                            <td>{user.id}</td>
                            <td>{user.userId}</td>
                            <td>{user.date}</td>

                            {/* <td>{user.products}</td> */}
                            <td>{user.__v}</td>
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
                        <p>{user.date}</p>
                        <p>{user.__v}</p>
                    </div>


                })}
            </ul>
        </div>
    )
}

export default Parents5