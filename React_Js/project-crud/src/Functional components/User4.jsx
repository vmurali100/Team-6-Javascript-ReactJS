import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'

const User4 = () => {
    const [person,setperson]=useState({username:"",password:"",email:"",dob:"",height:"",weight:""})
    const [allperson,setallperson]=useState([])
    const [isedit,setisedit]=useState(false)
    const handlechange=(event)=>{
        var variablename=event.target.name
        const newuser={...person}
        newuser[variablename]=event.target.value
        setperson(newuser)
    }
    const getallusers=()=>{
        axios.get("http://localhost:3000/users4").then((response)=>{
            setallperson(response.data)
        })
    }
    const clearusers=()=>{
        setperson({username:"",password:"",email:"",dob:"",height:"",weight:"",id:""})
    }
    const send=()=>{
        console.log(person)
        axios.post("http://localhost:3000/users4",person).then((response)=>{
        console.log("person added successfully")
        clearusers()
        getallusers()
        })
    }
    useEffect(()=>{
        getallusers()
    },[])
    const deleteuser=(persondetails)=>{
        axios.delete("http://localhost:3000/users4/"+persondetails.id).then((response)=>{
        getallusers()
        })
    }
    const edituser=(personinfo)=>{
        setisedit(true)
        setperson(personinfo)
    }
    const update=()=>{
        axios.put("http://localhost:3000/users4/"+person.id,person).then(()=>{
            getallusers()
            clearusers()
            setisedit(false)
        })
    }
  return (
    <div>
      <form>
      <h3>Person Details</h3>
            <label htmlFor="">Username</label>
            <br />
            <input type="text" name="username" placeholder='Username' value={person.username} onChange={(event) => { handlechange(event) }} />
            <br />
            <label htmlFor="">Password</label>
            < br />
            <input type="text" name="password" placeholder='Password' value={person.password} onChange={(event) => { handlechange(event) }} />
            <br />
            <label htmlFor="">Email</label>
            <br />
            <input type="text" name="email" placeholder='Email' value={person.email} onChange={(event) => { handlechange(event) }} />
            <br />
            <select name="" >
                <option value="">I am a man</option>
            </select><br/>
            <select name="" >
                <option value="">I want to find women</option>
            </select><br/>
           
            <label htmlFor="">Date Of Birth</label>
            <br />
            <input type="text" name="dob" placeholder='dd-mm-yyyy' value={person.dob} onChange={(event) => { handlechange(event) }} />
            <br />
            <label htmlFor="">Height</label>
            <br />
           <select name='height' value={person.height} onChange={(event) => { handlechange(event) }} >
            <option value="">Height</option>
            <option value="5.0">5.0</option>
            <option value="5.1">5.1</option>
            <option value="5.2">5.2</option>
            <option value="5.3">5.3</option>
            <option value="5.4">5.4</option>
            <option value="5.5">5.5</option>
           </select><br/>
           <label htmlFor="">Weight</label><br/>
           <select name='weight' value={person.weight} onChange={(event) => { handlechange(event) }} >
            <option value="">weight</option>
            <option value="50">50</option>
            <option value="51">51</option>
            <option value="52">52</option>
            <option value="53">53</option>
            <option value="54">54</option>
            <option value="55">55</option>
           </select><br/>
           <input type="text" name="id" hidden /> 
           {isedit ?  <button onClick={update} type="button">update </button>:<button onClick={send} type="button">Click </button>}
            
      </form>
      <hr/>
      <table border={1}>
        <thead>
            <tr>
                <th>Username</th>
                <th>Password</th>
                <th>Email</th>
                <th>Date Of Birth</th>
                <th>Height</th>
                <th>Weight</th>
                <th>Edit User</th>
                <th>Delete User</th>
            </tr>
        </thead>
        <tbody>
            {allperson.map((personinfo,i)=>{
                return <tr key={i}>
                    <td>{personinfo.username}</td>
                    <td>{personinfo.password}</td>
                    <td>{personinfo.email}</td>
                    <td>{personinfo.dob}</td>
                    <td>{personinfo.height}</td>
                    <td>{personinfo.weight}</td>
                    <td><button onClick={()=>{edituser(personinfo)}}>Edit User</button></td>
                    <td><button onClick={()=>{deleteuser(personinfo)}}>Delete User</button></td>
                </tr>
            })}
        </tbody>
      </table>
    </div>
  )
}

export default User4
