import React from "react"
const UsersclassTable=({use})=>{
    return(
        <div>
            <table border={1}>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>username</th>
                        <th>email</th>
                        <th>phone</th>
                        <th>website</th>
                    </tr>
                </thead>
                <tbody>
                    {use.map((user,i)=>{
                        return <tr key={i}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>{user.website}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}
export default UsersclassTable