import React from 'react'
import {useDispatch, useSelector} from 'react-redux'

export const UserDetails1 = () => {
    const allusers = useSelector((state)=>state.usersInfo.users)
    console.log(allusers)
  return (
    <div>
        <table border="1">
                <thead>
                    <tr>
                        <th>FirstName</th>
                        <th>LasttName</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {allusers.map((user, i) => {
                        return <tr key={i}>
                            <td>{user.fname}</td>  
                            <td>{user.lname}</td>  
                            <td><button >Edit</button></td> 
                            <td><button >Delete</button></td>                             
                        </tr>
                    })}
                </tbody>
            </table>
    </div>
  )
}
