import React from "react";
import { useState } from "react";

const Child2 = ({ users }) => {
    const [] = useState()
    return (
        <div>
            {users.length > 0 && (<table border={2}>
                <thead>
                    <tr>
                        <th>fname</th>
                        <th>lname</th>

                    </tr>
                </thead>
                <tbody>
                    {users.map((users, i) => {
                        return <tr key={i}>
                            
                            <td>{users.fname}</td>
                            <td>{users.lname}</td>

                        </tr>
                    })}
                </tbody>
            </table>
            )}
        </div>
    )
}
export default Child2;