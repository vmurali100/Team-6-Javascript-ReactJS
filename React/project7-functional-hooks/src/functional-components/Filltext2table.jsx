import React from 'react'

export const Filltext2table = ({Filltext2Users}) => {
  return (
    <div>
        <table border={1}>
            <thead>
                <tr>
                    <th>id</th>
                    <th>email</th>
                    <th>username</th>
                    <th>password</th>
                </tr>
            </thead>
            <tbody>
                {Filltext2Users.map((user,i)=>{
                    return <tr>
                        <td>{user.id}</td>
                        <td>{user.email}</td>
                        <td>{user.username}</td>
                        <td>{user.password}</td>
                    </tr>
                })}
            </tbody>
        </table>
    </div>
  )
}
