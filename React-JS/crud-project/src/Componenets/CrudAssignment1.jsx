import React,{useState} from 'react'
import axios from 'axios'
import User from './User'
import { useEffect } from 'react'

const CrudAssignment1 = () => {
    const [Users, setUsers] = useState({
        name:"",Username:"",email:"",Password:"",ConfirmPassWord:"",Message:"",id:""
         })
    const [AllUsers, setAllUsers] = useState([])
    const [IsEdit, setIsEdit] = useState(false)

    const handelchange = (event)=>{
        var variableName = event.target.name
        var newUsers={...Users}
        newUsers[variableName]=event.target.value
        setUsers(newUsers)
    }

    const getAllUsers =()=>{
        axios.get("http://localhost:3000/Users2").then((response)=>{
            // console.log(response)
            setAllUsers(response.data)
        })
    }

    const clearuser =()=>{
        setUsers({
            name:"",Username:"",email:"",Password:"",ConfirmPassWord:"",Message:""})
             
    }

    const AddUsers =()=>{
        console.log(Users)
        axios.post("http://localhost:3000/Users2",Users).then((response)=>{
            console.log("user added successfully")
            clearuser()
            getAllUsers()
        })
    }

    useEffect (()=>{
        getAllUsers()
    },[])
    
    //DeleteUser

    const deleteuser =(UsersDetails)=>{
        axios.delete("http://localhost:3000/Users2/"+UsersDetails.id).then((response)=>{
            getAllUsers()
        })        
    }

    //EditUser

    const edituser = (UserInfo)=>{
        setIsEdit(true)
         setUsers(UserInfo)
    }

    //UpdateUser
     const UpdateUsers = ()=>{
        axios.put("http://localhost:3000/Users2/" +Users.id,Users).then(()=>{
            getAllUsers()
            clearuser()
            setIsEdit(false)
        })
     }
  return (
    <div>
         <form >
         <label htmlFor="">Name :</label>
        <input type="text" name="name" placeholder='name' value={Users.name} onChange={(event)=>{handelchange(event)}}/> <br />

        <label htmlFor="">Username :</label>  
        <input type="text" name="Username" placeholder='Username' value={Users.Username} onChange={(event)=>{handelchange(event)}}/> <br />

        <label htmlFor="">Email :</label>
        <input type="text" name="email" placeholder='email' value={Users.email} onChange={(event)=>{handelchange(event)}} /> <br />

        <label htmlFor="">Password :</label>
        <input type="text" name="Password" placeholder='Password' value={Users.Password} onChange={(event)=>{handelchange(event)}}/> <br />


        <label htmlFor="">ConfirmPassWord :</label>
        <input type="text" name="ConfirmPassWord" placeholder='ConfirmPassword' value={Users.ConfirmPassWord} onChange={(event)=>{handelchange(event)}} /> <br />

        <label htmlFor="">Message :</label>
        <input type="text" name="Message" placeholder='Message' value={Users.Message} onChange={(event)=>{handelchange(event)}}/> <br />

        <input type="text" name="id" hidden/>
        
        {IsEdit ? <button onClick={UpdateUsers} type="button">Update Users</button> :
           <button onClick={AddUsers} type="button">Add Users</button> }        
        
         </form>

         <hr />
         <table border="1">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>ConfirmPassWord</th>
                    <th>Message</th>
                    <th>EditUser</th>
                    <th>DeleteUser</th>
                </tr>
            </thead>
            <tbody>
              {AllUsers.map((UserInfo,i)=>{
                return <tr key={i}>
                    <td>{UserInfo.name}</td>
                    <td>{UserInfo.Username}</td>
                    <td>{UserInfo.email}</td>
                    <td>{UserInfo.Password}</td>
                    <td>{UserInfo.ConfirmPassWord}</td>
                    <td>{UserInfo.Message}</td>
                    <td><button onClick={()=>{edituser(UserInfo)}}>Edit</button></td>
                    <td><button onClick={()=>{deleteuser(UserInfo)}}>Edit</button></td>
                </tr>
              })}
            </tbody>
         </table>
    </div>
  )
}

export default CrudAssignment1