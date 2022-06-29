import React,{useState} from 'react'
import axios from 'axios'
import { useEffect } from 'react'

const CurdAssigment5 = () => {
    const [Users, setUsers] = useState({Username:"",Password:"",EmailAddress:"",DateOfBirth:"",id:""}) 
    const [AllUsers, setAllUsers] = useState([])
    const [EditAllUser, setEditAllUser] = useState(false)
        
        
    
    const handlechange =(event)=>{
        var variableName=event.target.name;
        var newUsers={...Users}
        newUsers[variableName]=event.target.value
        setUsers(newUsers)
    }

    const getAllUsers = ()=>{
        axios.get("http://localhost:3000/Users5").then((response)=>{
            setAllUsers(response.data)
        })
    } 
   
    const clearusers = ()=>{
        setUsers({Username:"",Password:"",EmailAddress:"",DateOfBirth:""}) 
    }

    const AddUsers=()=>{        
        console.log(Users)
        axios.post("http://localhost:3000/Users5",Users).then((response)=>{
            console.log("User Added Successfully")
            clearusers()
            getAllUsers()
        })
        
    }

      useEffect (()=>{
        getAllUsers()
      },[])

      const deleteuser= (userdetails)=>{
        axios.delete("http://localhost:3000/Users5/"+userdetails.id).then((response)=>{
            getAllUsers()
        })
      }

      const edituser = (userinfo)=>{
        setUsers(userinfo)
        setEditAllUser(true)
      }

      const Updateuser= ()=>{
        axios.put("http://localhost:3000/Users5/"+Users.id,Users).then(()=>{
        clearusers()
        getAllUsers()   
        setEditAllUser(false)
        })
      }
  return (
    <div>
        <form >            
        <label htmlFor="">Username</label>
        <input type="text" name="Username" placeholder='Username' value={Users.Username} onChange={(event)=>{handlechange(event)}}/> <br />
        
        <label htmlFor="">Password</label>
        <input type="text" name="Password" placeholder='Password' value={Users.Password} onChange={(event)=>{handlechange(event)}}/> <br />

        <label htmlFor="">EmailAddress</label>
        <input type="text" name="EmailAddress" placeholder='EmailAddress' value={Users.EmailAddress} onChange={(event)=>{handlechange(event)}}/> <br />

        <label htmlFor="">DateOfBirth</label>
        <input type="text" name="DateOfBirth" placeholder='DateOfBirth' value={Users.DateOfBirth} onChange={(event)=>{handlechange(event)}}/> <br />       

        <input type="text" name="id" hidden />
        {EditAllUser ?  <button onClick={Updateuser} type="button">Updateuser</button>:<button onClick={AddUsers} type="button">AddUsers </button>}
        
       

      
        </form>

        <table border="1">
            <thead>
                <tr>
                    <th>Username</th>
                    <th>Password</th>
                    <th>EmailAddress</th>
                    <th>DateOfBirth</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {AllUsers.map((userinfo,i)=>{
                    return <tr key={i}>
                        <td>{userinfo.Username}</td>
                        <td>{userinfo.Password}</td>
                        <td>{userinfo.EmailAddress}</td>
                        <td>{userinfo.DateOfBirth}</td>
                        <td><button onClick={()=>{edituser(userinfo)}}>Edit</button></td>
                        <td><button onClick={()=>{deleteuser(userinfo)}}>Delete</button></td>
                    </tr>
                })}
            </tbody>
        </table>
    </div>
  )
}

export default CurdAssigment5