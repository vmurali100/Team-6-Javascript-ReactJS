import React from 'react'
import { useState } from 'react';
import {useSlector} from 'react'

export default function User() {
    const [user,setuser]=useState({
        fname:"",
        lname:""
    });

    const allusers=useSlector((state)=>state.users);
     const handlechange=(e)=>{
        let newuser ={...user};
        let [fieldname]=e.target.value;
        setuser(newuser)
     }
     const submit =()=>{
        console.log(user)
     }
  return (
    <div>
        <form action="">
            <label htmlFor="">fname</label>
            <input type="text" name="fname"  value ={user.fname} onChange={(e)=>{handlechange(e)}} />
            <label htmlFor="">lname</label>
            <input type="text" name="lname"  value ={user.lname} onChange={(e)=>{handlechange(e)}} />
            <button type="button" onClick={submit}></button>
        </form>
    </div>
  )
}
