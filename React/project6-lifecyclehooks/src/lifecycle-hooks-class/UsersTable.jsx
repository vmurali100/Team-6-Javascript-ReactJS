import React from 'react'

export const UsersTable = ({usersData}) => {
    return (
        <div>
            <table border={1}>
                <thead>
                    <tr>
                    <th>email</th>
                        <th>id</th>
                        <th>password</th>
                        <th>phone</th>
                        <th>username</th>
                        <th>__v</th>
                      
                    </tr>
                </thead>
                <tbody>
                    {usersData.map((user,i)=>{
                        return <tr key={i}>
                            <td>{user.email}</td>
                            <td>{user.id}</td>
                            <td>{user.password}</td>
                            <td>{user.phone}</td>
                            <td>{user.username}</td>
                            <td>{user.__v}</td>
                           
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}
