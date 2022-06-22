import React from 'react'
import { useState } from 'react';

const Childs4 = ({ Users }) => {
    const [] = useState()
    return (
        <div>
            {Users.length > 0 && (<table border={2}>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>albumId</th>
                        <th>title</th>
                        <th>url</th>
                        <th>thumbnailUrl</th>
                    </tr>
                </thead>
                <tbody>
                    {Users.map((user, i) => {
                        return <tr key={i}>
                            <td>{user.id}</td>
                            <td>{user.albumId}</td>
                            <td>{user.title}</td>
                            <td>{user.url}</td>
                            <td>{user.thumbnailUrl}</td>
                        </tr>
                    })}
                </tbody>
            </table>
            )}
            <ul>
                {Users.map((user, i) => {
                    return <div className="userinfo" key={i}>
                        <p>{user.id}</p>
                        <p>{user.albumId}</p>
                        <p>{user.title}</p>
                        <p>{user.url}</p>
                        <p>{user.thumbnailUrl}</p>
                    </div>


                })}
            </ul>
        </div>
    )
}

export default Childs4