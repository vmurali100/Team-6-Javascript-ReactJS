import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { addUser, updateUser } from '../slices/userSlices1';

export const Users1 = () => {
  const [user, setuser] = useState({
    fname: "",
    lname: "",
    dateofbirth: "",
    emailid: "",
    mobileno: ""
  });

  const userobj = useSelector((state) => state.usersInfo);
  console.log(userobj)

  useEffect(() => {
    if (userobj.isEdit) {
      setuser(userobj.users[userobj.editIndex])
    }
  }, [userobj])

  const dispatch = useDispatch();

  const handleChange = (e) => {
    let newUser = { ...user };
    let fieldName = e.target.name;
    newUser[fieldName] = e.target.value;
    setuser(newUser)
  }

  const handleSumbit = () => {
    dispatch(addUser(user))
    handleclear()
  }

  const handleclear = () => {
    setuser({
      fname: "",
      lname: "",
      dateofbirth: "",
      emailid: "",
      mobileno: ""
    })
  }
  const handleUpdate = () => {
    let updateobj = {
      data: user,
      index: userobj.editIndex,
      isEdit: false
    }
    dispatch(updateUser(updateobj))
    handleclear()
  }
  return (
    <div>
      <form>
        <label htmlFor="fname">First Name : </label>
        <input type="text" name="fname" value={user.fname} onChange={(e) => { handleChange(e) }} /><br />
        <label htmlFor="lname">Last Name : </label>
        <input type="text" name="lname" value={user.lname} onChange={(e) => { handleChange(e) }} /><br />
        <label htmlFor="dateofbirth">Date Of Birth : </label>
        <input type="date" name="dateofbirth" value={user.dateofbirth} onChange={(e) => { handleChange(e) }} /><br />
        <label htmlFor="emailid">Email ID : </label>
        <input type="text" name="emailid" value={user.emailid} onChange={(e) => { handleChange(e) }} /><br />
        <label htmlFor="mobileno">Mobile Number : </label>
        <input type="text" name="mobileno" value={user.mobileno} onChange={(e) => { handleChange(e) }} /> <br />
        <button type="button" onClick={userobj.isEdit ? handleUpdate : handleSumbit}>{userobj.isEdit ? 'Update User' : 'Edit User'}</button>
      </form>
    </div>
  )
}
