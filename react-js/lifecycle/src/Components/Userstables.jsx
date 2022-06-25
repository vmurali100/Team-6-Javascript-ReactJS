import React from 'react'

const Userstables=({filtextusers})=>{
    return(
        <div>
            <table border="1">
                <thead>
                    <tr>
                        <th>fname</th>
                        <th>lname</th>
                        <th>Tel</th>
                        <th>Address</th>
                        <th>city</th>
                        <th>state</th>
                        <th>zip</th>
                    </tr>
                </thead>
                <tbody>
                    {filtextusers.map((user)=>{
                        return(
                            <tr>
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
export default Userstables