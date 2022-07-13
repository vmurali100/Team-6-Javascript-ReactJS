import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser, editUser } from '../slices/userSlices2';

export const UsersDetails2 = () => {

    const allUsers = useSelector((state) => state.userInfo.users);

    const dispatch = useDispatch();

    const handleDeleteUser = (i) => {
        dispatch(deleteUser(i))
    }
    const handleEditUser = (i) => {
        var info = {
            isEdit: true,
            index: i
        }
        dispatch(editUser(info))
    }
    return (
        <div>
            <table border="1">
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Password</th>
                        <th>Email Address</th>
                        <th>Date Of Birth</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {allUsers.map((user, i) => {
                        return <tr key={i}>
                            <td>{user.username}</td>
                            <td>{user.password}</td>
                            <td>{user.emailaddress}</td>
                            <td>{user.dateofbirth}</td>
                            <td><button onClick={() => { handleEditUser(i) }}>Edit</button></td>
                            <td><button onClick={() => { handleDeleteUser(i) }}>Delete</button></td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}
