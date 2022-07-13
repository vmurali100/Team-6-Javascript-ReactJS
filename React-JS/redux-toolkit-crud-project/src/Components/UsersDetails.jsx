import React from 'react'
import {useDispatch, useSelector } from 'react-redux'
import { deleteUser, editUser } from '../slices/userSlice'


export const UsersDetails = () => {
    const allUsers = useSelector((state) => state.userInfo.users)
    const dispatch = useDispatch()

    const handledeleteUser = (i)=>{
        dispatch(deleteUser(i))
    }

    const handleEditUser = (i)=>{
        var info ={
            isEdit:true,
            index:i
        }
        dispatch(editUser(info))
    }
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
                    {allUsers.map((user, i) => {
                        return <tr key={i}>
                            <td>{user.fname}</td>  
                            <td>{user.lname}</td>  
                            <td><button onClick={()=>{handleEditUser(i)}}>Edit</button></td> 
                            <td><button onClick={()=>{handledeleteUser(i)}}>Delete</button></td>                             
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}
