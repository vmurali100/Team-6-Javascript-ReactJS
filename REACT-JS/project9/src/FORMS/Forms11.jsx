import React,{useState,useEffect} from 'react'
import axios from "axios"

const Forms11 = () => {
     const [user, setuser] = useState({
        fname:"",
        lname:"",
        id:""
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
        axios.get("http://localhost:3000/Form11").then((response)=>{
            console.log(response.data)
            setAllUsers(response.data)

        })
    }
    const addUser =()=>{
        console.log(user)
        axios.post("http://localhost:3000/Form11",user).then((response)=>{
            console.log("User Added Successfully")
            clearUser()
            getAllUsers()
        })
    }
    const clearUser =()=>{
        setuser({fname:"",lname:""})
    }
    useEffect(() => {
        getAllUsers() 
    }, [])
    const deleteuser = (userDetails)=>{
        axios.delete("http://localhost:3000/Form11/"+userDetails.id).then((response)=>{
            getAllUsers()

        })
    }
    const edituser = (userInfo)=>{
        setisEdit(true)
        setuser(userInfo)


    }
    const updateuser = ()=>{
        axios.put("http://localhost:3000/Form11/"+user.id,user).then(()=>{
            getAllUsers();
            clearUser();
            setisEdit(false)
        })
    }
  return (
    <div id="userInfo">
        <p>Forms11</p>
        <form>
            <label htmlFor="">First Name:</label>
            <input type="text" name="fname" value={user.fname} onChange={(event)=>{handleChange(event)}}/> <br />
            <label htmlFor="">Last Name:</label>
            <input type="text" name="lname" value={user.lname} onChange={(event)=>{handleChange(event)}}/> <br />
            <input type="text" name="id" hidden/>
            {isEdit ? <button onClick={updateuser} type="button">UpdateUser</button> : <button onClick={addUser} type="button">AddUser</button>}
            
            
        </form>
        <hr />
        <table border="2">
            <thead>
                <tr>
                    <th>FirstName</th>
                    <th>LastName</th>
                    <th>EditUser</th>
                    <th>DeleteUser</th>
                </tr>
            </thead>
            <tbody>
                {AllUsers.map((userInfo,i)=>{
                    return <tr key={i}>
                        <td>{userInfo.fname}</td>
                        <td>{userInfo.lname}</td>
                        <td><button onClick={()=>{edituser(userInfo)}}>Edit User </button></td>
                        <td><button onClick={()=>{deleteuser(userInfo)}}>Delete User</button></td>
                    </tr>
                })}

            </tbody>
        </table>
    </div>
  )
}

export default Forms11