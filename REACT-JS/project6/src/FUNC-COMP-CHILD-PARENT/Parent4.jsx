import React from "react";
import { useState } from "react";

const Parent4 = ({ users }) => {
    const [] = useState()
    return (
        <div>
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