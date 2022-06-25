import React from 'react'

export const Cartstable = ({usercarts}) => {
  return (
    <div>
          <table border={1}>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>userId</th>
                        <th>date</th>
                        <th>__v</th>
                        <th>email</th>
                      
                      
                    </tr>
                </thead>
                <tbody>
                    {usercarts.map((user,i)=>{
                        return <tr key={i}>
                         
                            <td>{user.id}</td>
                            <td>{user.userId}</td>
                            <td>{user.date}</td>
                            <td>{user.__v}</td>
                            <td>{user.email}</td>
                           
                           
                        </tr>
                    })}
                </tbody>
            </table>
    </div>
  )
}
