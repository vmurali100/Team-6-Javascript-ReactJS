import React,{useState,useEffect} from 'react'
import axios from "axios"

const Forms12 = () => {
     const [user, setuser] = useState({
        name:"",
        username:"",
        email:"",
        password:"",
        confirmpassword:"",
        message:""
     })
     const [AllUsers, setAllUsers] = useState([])
     const [isEdit, setisEdit] = useState(false)
    const handleChange =(event)=>{
        var inputName = event.target.name
        const newUser = {...user}
        newUser[inputName] = event.target.value
        setuser(newUser)  
    }
    const getAllUsers = ()=>{
        axios.get("http://localhost:3000/Form12").then((response)=>{
            console.log(response.data)
            setAllUsers(response.data)

        })
    }
    const addUser =()=>{
        console.log(user)
        axios.post("http://localhost:3000/Form12",user).then((response)=>{
            console.log("User Added Successfully")
            clearUser()
            getAllUsers()
        })
    }
    const clearUser =()=>{
        setuser({name:"",username:"",email:"",password:"",confirmpassword:"",message:""})
    }
    useEffect(() => {
        getAllUsers() 
    }, [])
    const deleteuser = (userDetails)=>{
        axios.delete("http://localhost:3000/Form12/"+userDetails.id).then((response)=>{
            getAllUsers()

        })
    }
    const edituser = (userInfo)=>{
        setisEdit(true)
        setuser(userInfo)


    }
    const updateuser = ()=>{
        axios.put("http://localhost:3000/Form12/"+user.id,user).then(()=>{
            getAllUsers();
            clearUser();
            setisEdit(false)
        })
    }
  return (
    <div id="userInfo">
        <p>Forms12</p>
        <form>
            <label htmlFor="">name:</label>
            <input type="text" name="name" value={user.name} onChange={(event)=>{handleChange(event)}}/> <br />
            <label htmlFor="">username:</label>
            <input type="text" name="username" value={user.username} onChange={(event)=>{handleChange(event)}}/> <br />
            <label htmlFor="">email</label>
            <input type="text"name="email"value={user.email}  onChange={(event)=>{handleChange(event)}}/> <br />
            <label htmlFor="">password</label>
            <input type="text" name="password" value={user.password}  onChange={(event)=>{handleChange(event)}}/> <br  />
            <label htmlFor="">confirmpassword</label>
            <input type="text" name="confirmpassword" value={user.confirmpassword} onChange={(event)=>{handleChange(event)}} />
            <label htmlFor="">message</label>
            <input type="text" name="message" value={user.message}  onChange={(event)=>{handleChange(event)}} />
            <input type="text" name="id" hidden/>
            {isEdit ? <button onClick={updateuser} type="button">UpdateUser</button> : <button onClick={addUser} type="button">AddUser</button>}
            
            
        </form>
        <hr />
        <table border="2">
            <thead>
                <tr>
                    <th>name</th>
                    <th>username</th>
                    <th>email</th>
                    <th>password</th>
                    <th>confirmpassword</th>
                    <th>message</th>
                    <th>EditUser</th>
                    <th>DeleteUser</th>
                </tr>
            </thead>
            <tbody>
                {AllUsers.map((userInfo,i)=>{
                    return <tr key={i}>
                        <td>{userInfo.name}</td>
                        <td>{userInfo.username}</td>
                        <td>{userInfo.email}</td>
                        <td>{userInfo.password}</td>
                        <td>{userInfo.confirmpassword}</td>
                        <td>{userInfo.message}</td>

                        <td><button onClick={()=>{edituser(userInfo)}}>Edit User </button></td>
                        <td><button onClick={()=>{deleteuser(userInfo)}}>Delete User</button></td>
                    </tr>
                })}

            </tbody>
        </table>
    </div>
  )
}

export default Forms12