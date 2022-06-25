import React from 'react'

export const Commentstable = ({userComments}) => {
  return (
    <div>
        <table border={1}>
            <thead>
                <tr>
                 
                    <th>id</th>
                    <th>name</th>
                    <th>email</th>
                    <th>body</th>
                </tr>
            </thead>
            <tbody>
                {userComments.map((user,i)=>{
                    return <tr key={i}>
                     
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.body}</td>
                    </tr>
                })}
            </tbody>
        </table>
    </div>
  )
}
