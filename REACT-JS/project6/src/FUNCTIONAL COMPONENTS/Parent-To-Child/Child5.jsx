import React from "react";
import { useState } from "react";

const Child5 = ({ users }) => {
    const [] = useState()
    return (
        <div>
            {users.length > 0 && (<table border={2}>
                <thead>
                    <tr>
                        <th>userId</th>
                        <th>id</th>
                        <th>title</th>
                        

                    </tr>
                </thead>
                <tbody>
                    {users.map((users, i) => {
                        return <tr key={i}>
                            
                            <td>{users.userId}</td>
                            <td>{users.id}</td>
                            <td>{users.title}</td>

                        </tr>
                    })}
                </tbody>
            </table>
            )}
        </div>
    )
}
export default Child5;