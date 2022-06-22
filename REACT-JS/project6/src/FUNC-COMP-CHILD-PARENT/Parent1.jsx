import React from "react";
import { useState } from "react";

const Parent1=({users})=>{
    const[]=useState()
    return(
        <div>
            {users.length >0 && (<table border={2}>
                <thead>
                    <tr>
                        <th>fname</th>
                        <th>lname</th>
                        <th>tel</th>
                        <th>address</th>
                        <th>city</th>
                        <th>state</th>
                        <th>zip</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {users.map((users,i)=>{
                        return<tr key={i}>
                            <td>{users.fname}</td>
                            <td>{users.lname}</td>
                            <td>{users.tel}</td>
                            <td>{users.address}</td>
                            <td>{users.city}</td>
                            <td>{users.state}</td>
                            <td>{users.zip}</td>
                        </tr>
                    })}
                </tbody>

            </table>)}
        </div>
    )
}
export default Parent1;