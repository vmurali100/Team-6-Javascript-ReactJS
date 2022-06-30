import React, {useEffect, useState} from 'react'
import axios from 'axios'
const Form2Curd = () => {
    const [allusers,setAllusers]= useState({fname:"",lname:"",dob:"",emailid:"",mobilenumber:"",id:""})
    const [users, setUsers] = useState([]);
    const [isEdit, setisEdit] = useState(false)
        const handlechange = (event) =>{
            var inputName = event.target.name;
            const newUser = {...allusers}
            newUser[inputName] = event.target.value;
            setAllusers(newUser)
        };
        const getAllusers = () => {
            axios.get("http://localhost:3000/allusers").then((response)=>{
                // console.log(response.data)
                setUsers(response.data)
            })
        } ;  
        const clearUser=()=>{
            setAllusers({fname:"",lname:"",dob:"",emailid:"",mobilenumber:""})
        };
        const addUser =() =>{
            console.log(addUser)
            axios.post("http://localhost:3000/allusers",allusers).then((response)=>{
                console.log("alluser Added Successfully");
                getAllusers()
                clearUser()
            })
        };
        useEffect(()=>{
            getAllusers()
        },[]);
        const deleteUser= (userDetails) => {
            axios.delete("http://localhost:3000/allusers/"+userDetails.id).then((response)=>{
                getAllusers()
            })
        };
        const editUser = (userInfo) =>{
            setisEdit(true)
            setAllusers(userInfo)
        };
        const updateUser = () =>{
            axios.put("http://localhost:3000/allusers/"+allusers.id,allusers).then(()=>{
                getAllusers();
                clearUser();
                setisEdit(false)
            })
        };
  return (
    <div>
        <h2>HTML Form</h2>
        <form action="">
            <label htmlFor="fname">First Name</label>
            <input type="text" name="fname" id="" value={allusers.fname} onChange={(event)=>{handlechange(event)}} /> <br />
            <label htmlFor="Lname">Last Name</label>
            <input type="text" name="lname" id="" value={allusers.lname} onChange={(event)=>{handlechange(event)}} /> <br />
            <label htmlFor="dob">Date Of Birth</label>
            <input type="text" name="dob" id="" value={allusers.dob} onChange={(event)=>{handlechange(event)}}/> <br />
            <label htmlFor="emailid">Email ID</label>
            <input type="text" name="emailid" id="" value={allusers.emailid} onChange={(event)=>{handlechange(event)}}/> <br />
            <label htmlFor="mobilenumber">Mobile Number</label>
            <input type="text" name="mobilenumber" id="" value={allusers.mobilenumber} onChange={(event)=>{handlechange(event)}} /> <br />
            {isEdit ? <button type="button" onClick={updateUser}>Update User</button> : <button onClick={addUser} type="button">Add Users</button>}
            
            
        </form>
        <hr />
        <table border="1">
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Date Of Birth</th>
                    <th>Email ID</th>
                    <th>Mobile Number</th>
                    <th>Edit User</th>
                    <th>Delete User</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((userInfo,i)=>{
                        return <tr key={i}>
                            <td>{userInfo.fname}</td>
                            <td>{userInfo.lname}</td>
                            <td>{userInfo.dob}</td>
                            <td>{userInfo.emailid}</td>
                            <td>{userInfo.mobilenumber}</td>
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

export default Form2Curd