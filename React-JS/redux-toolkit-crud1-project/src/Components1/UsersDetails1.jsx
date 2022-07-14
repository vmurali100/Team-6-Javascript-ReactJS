import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser, editUser } from '../slices1/userSlice1'

export const UsersDetails1 = () => {
    const allUsers = useSelector((state) => state.usersInfo.users)
    const dispatch = useDispatch()

    const handledeleteUser = (i) => {
        dispatch(deleteUser(i))
    }

    const handleEditUser = (i)=>{
        var info={
            isEdit:true,
            index:i
        }
        dispatch(editUser(info))
    }
    return (
        <div>
            <table border={1}>
                <thead>
                    <tr>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {allUsers.map((user, i) => {
                        return <tr key={i}>
                            <td>{user.fname}</td>
                            <td>{user.lname}</td>
                            <td><button onClick={()=>{handleEditUser(i)}}>Edit</button></td>
                            <td><button onClick={() => { handledeleteUser(i) }}>Delete</button></td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}
