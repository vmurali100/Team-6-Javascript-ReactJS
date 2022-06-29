import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'

const User2 = () => {
    const[user,setuser]=useState({name:"",username:"",email:"",password:"",confirm:"",message:"",id:""})
    const[allusers,setallusers]=useState([])
    const[isedit,setisedit]=useState(false)
    const handlechange=(event)=>{
        var inputuser=event.target.name
        const newuser={...user}
        newuser[inputuser]=event.target.value
        setuser(newuser)
    }
    const getallusers=()=>{
        axios.get("http://localhost:3000/users2").then((response)=>{
            setallusers(response.data)
        })
    }
    const clearallusers=()=>{
        setuser({name:"",username:"",email:"",password:"",confirm:"",message:""})
    }
    
    const send=()=>{
        console.log(user)
        axios.post("http://localhost:3000/users2",user).then((response)=>{
            console.log("user added successfully")
            clearallusers()
            getallusers()
        })
    }
    const deleteuser=(userdetails)=>{
        axios.delete("http://localhost:3000/users2/"+userdetails.id).then((response)=>{
            getallusers()
        })
    }
    const edituser=(userinfo)=>{
        setisedit(true)
        setuser(userinfo)
    }
    const update=()=>{
        axios.put("http://localhost:3000/users2/"+user.id,user).then(()=>{
            getallusers()
            clearallusers()
            setisedit(false)
        })
    }
    useEffect(()=>{
        getallusers()
    })
  return (
    <div>
      <form>
        <h3>BootStrap 4 Form Validation Demo</h3>
        <label htmlFor="">Name</label><br/>
        <input type="text" name='name'placeholder='Name' value={user.name} onChange={((event)=>{handlechange(event)})}/><br/>
        <label htmlFor="">Username</label><br/>
        <input type="text" name='username'placeholder='Username' value={user.username} onChange={((event)=>{handlechange(event)})}/><br/>
        <label htmlFor="">Email</label><br/>
        <input type="text" name='email'placeholder='Email' value={user.email} onChange={((event)=>{handlechange(event)})}/><br/>
        <label htmlFor="">Password</label><br/>
        <input type="text" name='password'placeholder='Password' value={user.password} onChange={((event)=>{handlechange(event)})}/><br/>
        <label htmlFor="">Confirm Password</label><br/>
        <input type="text" name='confirm'placeholder='Confirm Password' value={user.confirm} onChange={((event)=>{handlechange(event)})}/><br/>
        <label htmlFor="">Message</label><br/>
        <input type="text" name='message'placeholder='Message' value={user.message} onChange={((event)=>{handlechange(event)})}/><br/>
        <input type="text" name='id' hidden/>
        {isedit ? <button onClick={update} type="button">update</button>:<button onClick={send} type="button">Send</button>}
        
        
      </form>
      <hr/>
      <table border={1}>
        <thead>
            <tr>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Password</th>
                <th>Confirm Password</th>
                <th>Message</th>
                <th>Edit User</th>
                <th>Delete User</th>
            </tr>
        </thead>
        <tbody>
            {allusers.map((userinfo,i)=>{
                return <tr key={i}>
                    <td>{userinfo.name}</td>
                    <td>{userinfo.username}</td>
                    <td>{userinfo.email}</td>
                    <td>{userinfo.password}</td>
                    <td>{userinfo.confirm}</td>
                    <td>{userinfo.message}</td>
                    <td><button onClick={()=>{edituser(userinfo)}}>Edit User</button></td>
                    <td><button onClick={()=>{deleteuser(userinfo)}}>Delete User</button></td>
                </tr>
            })}
        </tbody>
      </table>
    </div>
  )
}

export default User2
