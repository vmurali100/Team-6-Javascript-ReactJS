import React from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { deleteUser, editUser } from '../slices/userSlice';

export const Userdetails = () => {
    const allUsers = useSelector((state)=>state.usersinfo.users)
   const dispatch= useDispatch()
    const handledeleteUser=(i)=>{
            dispatch(deleteUser(i))
    }

    const handleEditUser=(i)=>{
        var info={
            isedit:true,
            index:i
        }
        dispatch(editUser(info))

    }
  return (
    <div>
        <table border="1">
            <thead>
                <tr>
                <th>First Name</th>
                <th>Last name</th>
                <th>Edit</th>
                <th>Delete</th>
                </tr>

            </thead>
            <tbody>
                {allUsers.map((user,i)=>{
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
