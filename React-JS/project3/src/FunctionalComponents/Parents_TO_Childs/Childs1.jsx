import React from 'react'
import { useState } from 'react';
 
const Childs1 = ({ Users }) => {
    const [] = useState()
    return (
        <div>
            {Users.length > 0 && (<table border={2}>
                <thead>
                    <tr>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>TelePhoneNo</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Zip</th>
                    </tr>
                </thead>
                <tbody>
                    {Users.map((user, i) => {
                        return <tr key={i}>
                            <td>{user.fname}</td>
                            <td>{user.lname}</td>
                            <td>{user.tel}</td>
                            <td>{user.address}</td>
                            <td>{user.city}</td>
                            <td>{user.state}</td>
                            <td>{user.zip}</td>
                        </tr>
                    })}
                </tbody>
            </table>
            )}
            <ul>
                {Users.map((user, i) => {
                     return <div className="userinfo" key={i}>
                       <p>{user.fname}</p>
                    <p>{user.lname}</p>
                      <p>{user.tel}</p>
                        <p>{user.address}</p>
                        <p>{user.city}</p>
                 <p>{user.state}</p>
                        <p>{user.zip}</p>
                   </div>


                 })}
             </ul>
         </div>
   ) 
}

export default Childs1