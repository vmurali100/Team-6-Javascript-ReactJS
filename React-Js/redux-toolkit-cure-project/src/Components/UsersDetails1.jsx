import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser, eidtUser} from '../slices/userSlices1';

export const UsersDetails1 = () => {

  const dispatch = useDispatch();

  const allUsers = useSelector((state) => state.usersInfo.users);

  const handleDeleteUser = (i) => {
    dispatch(deleteUser(i))
  }

  const handleEditUser = (i) => {
    var info = {
      isEdit: true,
      index: i
    }
    dispatch(eidtUser(info))
  }

  return (
    <div>
      <table border="1">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Date Of Birth</th>
            <th>Email Id</th>
            <th>Mobile Number</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {allUsers.map((user, i) => {
            return <tr key={i}>
              <td>{user.fname}</td>
              <td>{user.lname}</td>
              <td>{user.dateofbirth}</td>
              <td>{user.emailid}</td>
              <td>{user.mobileno}</td>
              <td><button onClick={() => { handleEditUser(i) }} >Edit</button></td>
              <td><button onClick={() => { handleDeleteUser(i) }} >Delete</button></td>
            </tr>
          })}
        </tbody>
      </table>
    </div>
  )
}
