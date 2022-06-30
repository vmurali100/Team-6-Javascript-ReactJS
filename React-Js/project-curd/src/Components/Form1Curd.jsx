import React, {useEffect, useState} from 'react'
import axios from 'axios'
const Form1Curd = () => {
    const [user, setuser] = useState({name:"",username:"",email:"",password:"",comfirmpassword:"",message:"",id:""});
    const [allUsers, setallUsers] = useState([]);
    const [isEdit, setisEdit] = useState(false)
        const handlechange = (event) =>{
            var inputName = event.target.name;
            const newUser = {...user}
            newUser[inputName] = event.target.value;
            setuser(newUser)
        };
        const getAllusers = () => {
            axios.get("http://localhost:3000/user").then((response)=>{
                // console.log(response.data)
                setallUsers(response.data)
            })
        } ;  
        const clearUser=()=>{
            setuser({name:"",username:"",email:"",password:"",comfirmpassword:"",message:""})
        };
        const addUser =() =>{
            console.log(addUser)
            axios.post("http://localhost:3000/user",user).then((response)=>{
                console.log("User Added Successfully");
                getAllusers()
                clearUser()
            })
        };
        useEffect(()=>{
            getAllusers()
        },[]);
        const deleteUser= (userDetails) => {
            axios.delete("http://localhost:3000/user/"+userDetails.id).then((response)=>{
                getAllusers()
            })
        };
        const editUser = (userInfo) =>{
            setisEdit(true)
            setuser(userInfo)
        };
        const updateUser = () =>{
            axios.put("http://localhost:3000/user/"+user.id,user).then(()=>{
                getAllusers();
                clearUser();
                setisEdit(false)
            })
        };
  return (
    <div>
         <form>
        <label htmlFor="">Name</label><br />
        <input type="text" name="name" placeholder="Name" value={user.name} onChange={(event)=>{handlechange(event)}} /> <br></br>
        <label htmlFor="">Username</label><br />
        <input type="text" name="username" placeholder="Username" value={user.username} onChange={(event)=>{handlechange(event)}}/> <br></br>
        <label htmlFor="">Email</label><br />
        <input type="text" name="email" placeholder="Email" value={user.email} onChange={(event)=>{handlechange(event)}}/> <br></br>
        <label htmlFor="">Password</label><br />
        <input type="Password" name="password" placeholder="Password" value={user.password} onChange={(event)=>{handlechange(event)}}/> <br></br>
        <label htmlFor="">Confirm Password</label><br />
        <input type="Password" name="comfirmpassword" placeholder="Confirm Password" value={user.comfirmpassword} onChange={(event)=>{handlechange(event)}}/> <br></br>
        <label htmlFor="">Message</label><br />
        <input type="message" name="message" placeholder="Message" value={user.message} onChange={(event)=>{handlechange(event)}}/> <br></br>
        <input type="text" name="id" hidden />
        {isEdit ? <button type="button" onClick={updateUser}>Update User</button> : <button onClick={addUser} type="button">Add Users</button>}
        
        
        </form>
        <hr />
        <table border="1">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>UserName</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Confirm Password</th>
                    <th>Message</th>
                    <th>Edit User</th>
                    <th>Delete User</th>
                </tr>
            </thead>
            <tbody>
                {
                    allUsers.map((userInfo,i)=>{
                        return <tr key={i}>
                            <td>{userInfo.name}</td>
                            <td>{userInfo.username}</td>
                            <td>{userInfo.email}</td>
                            <td>{userInfo.password}</td>
                            <td>{userInfo.comfirmpassword}</td>
                            <td>{userInfo.message}</td>
                            <td><button type="button" onClick={()=>{editUser(userInfo)}}>Edit User</button></td>
                            <td><button type="button" onClick={()=>{deleteUser(userInfo)}}>Delete User</button></td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default Form1Curd