import React,{useState} from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, updateUser } from '../slices/userSlice5'


const Users5 = () => {
  const [user, setuser] = useState({
    fname:"",
    lname:""
  })
  const userObj=useSelector((state)=>state.userInfo)
  useEffect(()=>{
    if(userObj.isEdit){
      setuser(userObj.user[userObj.editIndex])
    }
  },[userObj])
  const dispatch=useDispatch()
  const handleChange=(event)=>{
    var newPerson={...user}
    var fieldname=event.target.name
    newPerson[fieldname]=event.target.value
    setuser(newPerson)
  }
  const handleSubmit=()=>{
    console.log(user)
    dispatch(addUser(user))
    clearForm()
  }
  const clearForm=()=>{
    setuser({
      fname:"",
      lname:""
    })
  }
  const handleupdateUser=()=>{
    var updateInfo={
      data:user,
      index:userObj.editIndex,
      isEdit:false
    }
    dispatch(updateUser(updateInfo))
  }
  return (
    <div>
      <label htmlFor="fname">First name</label>
      <input type="text" name="fname" value={user.fname} onChange={(event)=>{handleChange(event)}} /><br/>
      <label htmlFor="lname">Last Name</label>
      <input type="text" name="lname" value={user.lname} onChange={(event)=>{handleChange(event)}} /><br/>
      <button onClick={userObj.isEdit ? handleupdateUser : handleSubmit}>{userObj.isEdit ? "update user" :"add user"}</button>
    </div>
  )
}

export default Users5