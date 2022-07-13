import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, updateUser } from '../slices/userSlices2'

export const Users2 = () => {
  const [user, setuser] = useState({
    username: "",
    password: "",
    emailaddress: "",
    dateofbirth: ""
  });

  const userobj = useSelector((state => state.userInfo));

  useEffect(() => {
    if (userobj.isEdit) {
      setuser(userobj.users[userobj.editIndex])
    }
  }, [userobj])
  console.log(userobj)
  const dispatch = useDispatch();

  const handleChange = (e) => {
    let newUser = { ...user };
    let fieldName = e.target.name;
    newUser[fieldName] = e.target.value
    setuser(newUser)
  };

  const handlesubmit = () => {
    dispatch(addUser(user))
    handleClear()
  };

  const handleClear = () => {
    setuser({
      username: "",
      password: "",
      emailaddress: "",
      dateofbirth: ""
    })
  }
  const handleUpdateUser = () => {
    let updateojb = {
      data: user,
      index: userobj.editIndex,
      isEdit: false
    }
    dispatch(updateUser(updateojb))
    handleClear()
  }
  return (
    <div>
      <form>
        <label htmlFor="username">Username  </label>
        <input type="text" name="username" id="" value={user.username} onChange={(e) => { handleChange(e) }} /><br />
        <label htmlFor="password">Password  </label>
        <input type="text" name="password" id="" value={user.password} onChange={(e) => { handleChange(e) }} /><br />
        <label htmlFor="emailaddress">Email Address  </label>
        <input type="text" name="emailaddress" id="" value={user.emailaddress} onChange={(e) => { handleChange(e) }} /><br />
        <label htmlFor="dateofbirth">Date Of Birth  </label>
        <input type="text" name="dateofbirth" id="" value={user.dateofbirth} onChange={(e) => { handleChange(e) }} /><br />
        <button type="button" onClick={userobj.isEdit ? handleUpdateUser : handlesubmit}>{userobj.isEdit ? 'Update User' : 'Edit User'}</button>
      </form>
    </div>
  )
}
