import React from 'react'

export const Cartstable5 = ({cartDetails}) => {
    return (
        <div>
            <table border={1}>
                <thead>
                    <tr>
                    <th>id</th>
                        <th>userId</th>
                        <th>date</th>
                        <th>__v</th>
                      
                    </tr>
                </thead>
                <tbody>
                    {cartDetails.map((user,i)=>{
                        return <tr key={i}>
                            <td>{user.id}</td>
                            <td>{user.userId}</td>
                            <td>{user.date}</td>
                            <td>{user.__v}</td>
                           
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}
