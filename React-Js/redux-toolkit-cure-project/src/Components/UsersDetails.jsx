import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteUser, editUser } from '../slices/userSlice';

export const UsersDetails = () => {
    const allusers = useSelector((state) => state.userInfo.users);

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
                        <th>University</th>
                        <th>Institute</th>
                        <th>Branch</th>
                        <th>Degree</th>
                        <th>Experience</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {allusers.map((user, i) => {
                        return <tr key={i}>
                            <td>{user.university}</td>
                            <td>{user.institute}</td>
                            <td>{user.branch}</td>
                            <td>{user.degree}</td>
                            <td>{user.experience}</td>
                            <td><button onClick={() => { handleEditUser(i) }}>Edit</button></td>
                            <td><button onClick={() => { handleDeleteUser(i) }}>Delete</button></td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}