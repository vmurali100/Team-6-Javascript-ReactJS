import React, {useEffect, useState} from 'react'
import axios from 'axios'
const Form4Curd = () => {
    const [person2, setperson2] = useState({street:"",citystate:"",zipcode:"",country:""});
    const [allUsers, setallUsers] = useState([]);
    const [isEdit, setisEdit] = useState(false)
        const handlechange = (event) =>{
            var inputName = event.target.name;
            const newUser = {...person2}
            newUser[inputName] = event.target.value;
            setperson2(newUser)
        };
        const getAllusers = () => {
            axios.get("http://localhost:3000/person2").then((response)=>{
                // console.log(response.data)
                setallUsers(response.data)
            })
        } ;  
        const clearUser=()=>{
            setperson2({street:"",citystate:"",zipcode:"",country:""})
        };
        const addUser =() =>{
            console.log(addUser)
            axios.post("http://localhost:3000/person2",person2).then((response)=>{
                console.log("User Added Successfully");
                getAllusers()
                clearUser()
            })
        };
        useEffect(()=>{
            getAllusers()
        },[]);
        const deleteUser= (userDetails) => {
            axios.delete("http://localhost:3000/person2/"+userDetails.id).then((response)=>{
                getAllusers()
            })
        };
        const editUser = (userInfo) =>{
            setisEdit(true)
            setperson2(userInfo)
        };
        const updateUser = () =>{
            axios.put("http://localhost:3000/person2/"+person2.id,person2).then(()=>{
                getAllusers();
                clearUser();
                setisEdit(false)
            })
        };
  return (
    <div>
        <h2>Address</h2><hr />
        <form action="">
            <label htmlFor="street">Street</label>
            <input type="text" name="street" id="" value={person2.street} onChange={(event)=>{handlechange(event)}}/> <br />
            <input type="text" name="" id="" value={person2.street} onChange={(event)=>{handlechange(event)}}/><br />
            <label htmlFor="citystate">City, State</label>
            <input type="text" name="citystate" id="" value={person2.citystate} onChange={(event)=>{handlechange(event)}} /> <br />

            <input type="text" name="citystate" id="" value={person2.citystate} onChange={(event)=>{handlechange(event)}} /><br />
            <label htmlFor="zipcode">Zip Code</label>
            <input type="text" name="zipcode" id="" value={person2.zipcode} onChange={(event)=>{handlechange(event)}}/> <br />
            <label htmlFor="country">Country</label>
            <input type="text" name="country" id="" value={person2.country} onChange={(event)=>{handlechange(event)}}/> <br />
            {isEdit ? <button type="button" onClick={updateUser}>Update User</button> : <button onClick={addUser} type="button">Add Users</button>}
        </form>
        <hr />
        <table border="1">
            <thead>
                <tr>
                    <th>Street</th>
                    <th>City, State</th>
                    <th>Zip Code</th>
                    <th>Country</th>
                    <th>Edit User</th>
                    <th>Delete User</th>
                </tr>
            </thead>
            <tbody>
                {
                    allUsers.map((userInfo,i)=>{
                        return <tr key={i}>
                            <td>{userInfo.street}</td>
                            <td>{userInfo.citystate}</td>
                            <td>{userInfo.zipcode}</td>
                            <td>{userInfo.country}</td>
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

export default Form4Curd