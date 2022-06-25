import React from "react"
const UsersTable=({fill})=>{
    return(
        <div>
            <table border={1}>
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
                    {fill.map((user,i)=>{
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
        </div>
    )
}
export default UsersTable