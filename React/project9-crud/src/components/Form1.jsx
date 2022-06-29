import axios from 'axios'
import React,{useState} from 'react'
import { useEffect } from 'react'

export const Form1 = () => {
    const [user, setuser] = useState({
        Firstname:"",Lastname:"",DataOfBirth:"",Email:"",MobileNumber:"",id:""
    })
    const [allusers, setallusers] = useState([])
    const [isEdit, setisEdit] = useState(false)
    const handleChange=(event)=>{
        var inputName=event.target.name
        var newUser={...user}
        newUser[inputName]=event.target.value
        setuser(newUser)
    }
    const getallusers=()=>{
        axios.get("http://localhost:3000/form1").then((response)=>{
            console.log(response.data)
            setallusers(response.data)
        })
    }
    const clearform=()=>{
        setuser({ Firstname:"",Lastname:"",DataOfBirth:"",Email:"",MobileNumber:"",id:""})
    }
    const addUser=()=>{
        console.log(user)
        axios.post("http://localhost:3000/form1",user).then((response)=>{
            console.log("user added successfully")
            clearform()
            getallusers()
        })
    }
    useEffect(()=>{
        getallusers()
    },[])
    const deleteuser=(data)=>{
        axios.delete("http://localhost:3000/form1/"+data.id).then((response)=>{
            getallusers()

        })
    }
    const edituser=(data)=>{
        setisEdit(true)
        setuser(data)
    }
    const updateuser=()=>{
        axios.put("http://localhost:3000/form1/"+user.id,user).then(()=>{
            getallusers()
            clearform()
            setisEdit(false)
        })
    }
  return (
    <div>
        <form>
            <label htmlFor="Firstname">First Name</label>
            <input type="text" name="Firstname" value={user.Firstname} onChange={(event)=>{handleChange(event)}}/><br/>

            <label htmlFor="Lastname">Last Name</label>
            <input type="text" name="Lastname" value={user.Lastname} onChange={(event)=>{handleChange(event)}}/><br/>

            <label htmlFor="DataOfBirth">Date of Birth</label>
            <input type="date" name="DataOfBirth" value={user.DataOfBirth} onChange={(event)=>{handleChange(event)}}/><br/>

            <label htmlFor="Email">Email</label>
            <input type="text" name="Email" value={user.Email} onChange={(event)=>{handleChange(event)}}/><br/>

            <label htmlFor="MobileNumber">MobileNumber</label>
            <input type="text" name="MobileNumber" value={user.MobileNumber}onChange={(event)=>{handleChange(event)}}/><br/>
             <input type="text" name="id" id="" hidden/>

                {isEdit ? <button onClick={updateuser} type="button">update user</button> :<button onClick={addUser} type="button">add user</button>}
            
            
        
        </form>
        <hr />
        <table border={1}>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Date of Birth</th>
                    <th>Email</th>
                    <th>Mobile number</th>
                    <th>Edit user</th>
                    <th>Delete user</th>
                </tr>
            </thead>
            <tbody>
                {allusers.map((data,i)=>{
                    return <tr key={i}>
                        <td>{data.Firstname}</td>
                        <td>{data.Lastname}</td>
                        <td>{data.DataOfBirth}</td>
                        <td>{data.Email}</td>
                        <td>{data.MobileNumber}</td>
                        <td><button onClick={()=>{edituser(data)}}>Edit user</button></td>
                        <td><button onClick={()=>{deleteuser(data)}}>Delete user</button></td>
                    </tr>
                })}
            </tbody>
        </table>
    </div>
  )
}
