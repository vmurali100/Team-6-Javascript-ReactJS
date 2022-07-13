import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser, editUser } from '../slices/userSlices';


export const Userstable = () => {

    const dispatch = useDispatch();
    
    const allUsers = useSelector((state) => state.usersInfo.users);

    const handledeleteUser = (i)=>{
        dispatch(deleteUser(i))
    }
    const handleEditUser = (i)=>{
        var info = {
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
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Message</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {allUsers.map((user,i)=>{ 
                        return <tr key={i}>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.password}</td>
                            <td>{user.message}</td>
                            <td><button onClick={()=>{handleEditUser(i)}}>Edit</button></td>
                            <td><button onClick={()=>{handledeleteUser(i)}}>Delete</button></td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}
