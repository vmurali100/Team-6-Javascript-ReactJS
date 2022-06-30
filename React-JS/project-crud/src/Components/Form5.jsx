import axios from 'axios'
import React,{useState} from 'react'
import { useEffect } from 'react'

const Form5 = () => {
    const [user, setuser] = useState({fname:"",lname:"",date:"",email:"",mobile:"",id:""})
    const [allusers, setallusers] = useState([])
    const [isedit, setisedit] = useState(false)
   const handlechange=(event)=>{
    var inputname=event.target.name
    const newuser={...user}
    newuser[inputname]=event.target.value
    setuser(newuser)
   }
   const getallusers=()=>{
    axios.get("http://localhost:3000/todos").then((Response)=>{
        setallusers(Response.data)
    })
   }
   const clearusers=()=>{
    setuser({fname:"",lname:"",date:"",email:"",mobile:"",id:""})
   }
   const adduser=()=>{
    console.log(user)
    axios.post("http://localhost:3000/todos",user).then((Response)=>{
        console.log("added successfully")
        clearusers()
        getallusers()
    })
   }
   useEffect(()=>{
    getallusers()
   },[])
   const deleteuser=(userdetails)=>{
    axios.delete("http://localhost:3000/todos/"+userdetails.id).then((Response)=>{
        getallusers()
    })
   }
   const edituser=(userinfo)=>{
    setisedit(true)
    setuser(userinfo)
   }
   const update=()=>{
    axios.put("http://localhost:3000/todos/"+user.id,user).then(()=>{
        getallusers()
        clearusers()
        setisedit()
    })
   }
  return (
    <div>
        <form>
            <label htmlFor="">First Name</label>
            <input type="text" name="fname" value={user.fname} onChange={(event)=>{handlechange(event)}}/><br/>
            <label htmlFor="">Last Name</label>
            <input type="text" name="lname" value={user.lname} onChange={(event)=>{handlechange(event)}}/><br/>
            <label htmlFor="">Date Of Birth</label>
            <input type="text" name="date" value={user.date} onChange={(event)=>{handlechange(event)}}/><br/>
            <label htmlFor="">Email Id</label>
            <input type="text" name="email" value={user.email} onChange={(event)=>{handlechange(event)}}/><br/>
            <label htmlFor="">Mobile Number</label>
            <input type="text" name="mobile" value={user.mobile} onChange={(event)=>{handlechange(event)}}/><br/>
            <input type="text" name="id" hidden /><br/>
            {isedit? <button onClick={update} type="button">update</button>:<button onClick={adduser} type="button">submit</button>}
        </form>
        <hr/>
        <table border={1}>
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
                {allusers.map((userinfo,i)=>{
                    return <tr key={i}>
                        <td>{userinfo.fname}</td>
                        <td>{userinfo.lname}</td>
                        <td>{userinfo.date}</td>
                        <td>{userinfo.email}</td>
                        <td>{userinfo.mobile}</td>
                        <td><button onClick={()=>{edituser(userinfo)}}>Edit</button></td>
                        <td><button onClick={()=>{deleteuser(userinfo)}}>Delete</button></td>
                    </tr>
                })}
            </tbody>
        </table>
    </div>
  )
}

export default Form5