import React,{useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { adduser } from '../slices1/userSlice1'

export const User1 = () => {
  const allusers = useSelector((state)=>state.users)
  console.log("allusers",allusers)
  const [user, setuser] = useState({
    fname:"",
    lname:"",
})
    
    const dispatch = useDispatch()
   
    const handleChnage=(e)=>{
          let newUser={...user};
          let fieldname =e.target.name;
          newUser[fieldname]=e.target.value;
          setuser(newUser)
    }    
     const handleSubmit = ()=>{
      console.log(user)
      dispatch(adduser(user))
     }
  return (
    <div>
      <form >
        <label htmlFor="fname">FirstName</label>
        <input type="text" name="fname" value={user.fname} onChange={(e)=>{handleChnage(e)}}/> <br />
        <label htmlFor="lname">Last Name</label>
        <input type="text" name="lname" value={user.lname}  onChange={(e)=>{handleChnage(e)}}/> <br />

        <button type='button' onClick={handleSubmit}>AddUser</button>
      </form>
    </div>
  )
}
