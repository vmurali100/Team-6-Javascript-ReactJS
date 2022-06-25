import React from 'react'

export const Filltext4table = ({filltext4users}) => {
  return (
    <div>
        <table border={1}>
            <thead>
                <tr>
                    <th>fname</th>
                    <th>lname</th>
                
                </tr>
            </thead>
            <tbody>
                {filltext4users.map((user,i)=>{
                    return <tr key={i}>
                        <td>{user.fname}</td>
                        <td>{user.lname}</td>

                    </tr>
                })}
            </tbody>
        </table>
    </div>
  )
}
