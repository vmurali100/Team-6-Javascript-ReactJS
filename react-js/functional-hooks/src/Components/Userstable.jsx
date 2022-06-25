 import React from 'react'
 
 const Userstable=({filtextusers})=>{
    return(
        <div>
           <table border="1">
                    <thead>
                        <tr>
                            <th>fname</th>
                            <th>lname</th>
                            <th>Tel</th>
                            <th>Address</th>
                            <th>City</th>
                            <th>state</th>
                            <th>Zip</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filtextusers.map((user,i)=>{
                           return (
                            <tr key={i}>
                                <td>{user.fname}</td>
                                <td>{user.lname}</td>
                                <td>{user.tel}</td>
                                <td>{user.address}</td>
                                <td>{user.city}</td>
                                <td>{user.state}</td>
                                <td>{user.zip}</td>
                            </tr>
                           )
                        })}
                    </tbody>
                </table>
        </div>
    )
}
export default Userstable

