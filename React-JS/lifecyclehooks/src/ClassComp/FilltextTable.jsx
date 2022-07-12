import React from "react";

export const FilltextTable=({allusers})=>{
   return (
    <div>
        <table border="1">
            <thead>
                <tr>
                    <th>id</th>
                    <th>email</th>
                    <th>username</th>
                    <th>password</th>
                </tr>
            </thead>
            <tbody>
                {allusers.map((user,i)=>{
                    return(
                        <tr key={i}>
                            <td>{user.id}</td>
                            <td>{user.email}</td>
                            <td>{user.username}</td>
                            <td>{user.password}</td>

                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
   )
}