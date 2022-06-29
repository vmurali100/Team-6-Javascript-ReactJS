import axios from 'axios'
import React,{useState} from 'react'
import { useEffect } from 'react'

const Form1 = () => {
    const [user, setuser] = useState({fname:"",lname:"",date:"",email:"",mobile:""})
    const [alluser, setalluser] = useState([])
    const [isedit,setisedit]=useState(false)
  const hanlechange=(event)=>{
        var inputname=event.target.name
        const newuser={...user}
        newuser[inputname]=event.target.value
        setuser(newuser)
  }
  const getallusers=()=>{
    axios.get("http://localhost:3000/users").then((response)=>{
        setalluser(response.data)
    })
  }
  const clearusers=()=>{
    setuser ({fname:"",lname:"",date:"",email:"",mobile:"",id:""})
  }
 const adduser=()=>{
    console.log(user)
    axios.post("http://localhost:3000/users",user).then((response)=>{
        console.log("user added successfully")
        clearusers()
        getallusers()
    })
  }
  useEffect(()=>{
    getallusers()
  },[])
  const deleteuser=(userdetails)=>{
    axios.delete("http://localhost:3000/users/"+userdetails.id).then((response)=>{
        getallusers()
    })
  }
  const edituser=(userinfo)=>{
    setisedit(true)
    setuser(userinfo)
  }
  const updateuser=()=>{
    axios.put("http://localhost:3000/users/"+user.id,user).then(()=>{
        getallusers()
        clearusers()
        setisedit(false)
    })
  }
  return (
    <div>
        <form>
        <label htmlFor="">First Name</label>
        <input type="text" name="fname" id="" value={user.fname} onChange={(event)=>{hanlechange(event)}}/><br></br>
        <label htmlFor="">Last Name</label>
        <input type="text" name="lname" id="" value={user.lname} onChange={(event)=>{hanlechange(event)}}/><br></br>
        <label htmlFor="">Date of Birth</label>
        <input type="text" name="date" id="" value={user.date} onChange={(event)=>{hanlechange(event)}}/><br></br>
        <label htmlFor="">Email Id</label>
        <input type="text" name="email" id="" value={user.email} onChange={(event)=>{hanlechange(event)}}/><br></br>
        <label htmlFor="">Mobile Number</label>
        <input type="text" name="mobile" id="" value={user.mobile} onChange={(event)=>{hanlechange(event)}}/><br></br>
        <input type="text" name="id" />
        {isedit? <button onClick={updateuser} type="button">Update user</button>:<button onClick={adduser} type="button">Sumbit</button>}
        </form>
        <hr />
        <table border={1}>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Date of Birth</th>
                    <th>Email Id</th>
                    <th>Mobile Number</th>
                    <th>Edit</th>
                    <th>Detete</th>
                </tr>
            </thead>
            <tbody>
                {
                    alluser.map((userinfo,i)=>{
                        return <tr key={i}>
                            <td>{userinfo.fname}</td>
                            <td>{userinfo.lname}</td>
                            <td>{userinfo.date}</td>
                            <td>{userinfo.email}</td>
                            <td>{userinfo.mobile}</td>
                            <td><button onClick={()=>{edituser(userinfo)}}>edit user</button></td>
                            <td><button onClick={()=>{deleteuser(userinfo)}}>delete user</button></td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default Form1