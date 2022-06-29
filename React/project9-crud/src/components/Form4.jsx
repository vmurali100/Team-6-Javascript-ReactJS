import axios from 'axios'
import React,{useState} from 'react'
import { useEffect } from 'react'

export const Form4 = () => {
    const [user, setuser] = useState({
        username:"",password:"",email:"",dateofBirth:"",
    })
    const [allusers, setallusers] = useState([])
    const [isEdit, setisEdit] = useState(false)
    const handleChange=(event)=>{
        var inputName=event.target.name
        var newUser={...user}
        newUser[inputName]=event.target.value
        setuser(newUser)
    }
    const clearform=()=>{
        setuser({ username:"",password:"",email:"",dateofBirth:""})
    }
    const getallusers=()=>{
        axios.get("http://localhost:3000/form4").then((response)=>{
            setallusers(response.data)
        })
    }
    const addUser=()=>{
        console.log(user)
        axios.post("http://localhost:3000/form4",user).then((response)=>{
            console.log("user added successfully")
            getallusers()
            clearform()
        })
    }
    useEffect(()=>{
        getallusers()
    },[])
    const deleteuser=(data)=>{
        axios.delete("http://localhost:3000/form4/"+data.id).then((response)=>{
            getallusers()
        })
    }
    const edituser=(data)=>{
        setuser(data)
        setisEdit(true)
    }
    const updateuser=(data)=>{
        axios.put("http://localhost:3000/form4/"+user.id,user).then((response)=>{
            getallusers()
            setisEdit(false)
            clearform()
        })
    }
  return (
    <div>
        <form >
            <label htmlFor="username">User Name</label>
            <input type="text" name="username" value={user.username} onChange={(event)=>{handleChange(event)}} /><br/>

            <label htmlFor="password">password</label>
            <input type="password" name="password" value={user.password} onChange={(event)=>{handleChange(event)}} /><br/>

            <label htmlFor="email">email</label>
            <input type="text" name="email" value={user.email} onChange={(event)=>{handleChange(event)}} /><br/>

                <select name="selectA"   onChange={(event)=>{handleChange(event)}}>
                    <option value="">I am a men</option>
                    <option value="">I am a girl</option>
                </select><br/>

                <select name="selectB"   onChange={(event)=>{handleChange(event)}}>
                    <option value="">I want to find women</option>
                    <option value="">I want to find men</option>
                </select><br/>
                
            <label htmlFor="dateofBirth">Date of birth</label>
            <input type="date" name="dateofBirth" value={user.dateofBirth} onChange={(event)=>{handleChange(event)}} /><br/>
                <input type="text" name="id" id="" hidden/>
                {isEdit ? <button onClick={updateuser}>update user</button> : <button onClick={addUser} type="button">add user</button>}
               
                
        </form>
        <hr />
        <table border={1}>
            <thead>
                <tr>
                    <th>username</th>
                    <th>password</th>
                    <th>email</th>
                    <th>date of birth</th>
                    <th>edit user</th>
                    <th>delete user</th>
                    
                </tr>
            </thead>
            <tbody>
                {allusers.map((data,i)=>{
                    return <tr key={i}>
                        <td>{data.username}</td>
                        <td>{data.password}</td>
                        <td>{data.email}</td>
                        <td>{data.dateofBirth}</td>
                        <td><button onClick={()=>{edituser(data)}}>edit user</button></td>
                        <td onClick={()=>{deleteuser(data)}}><button>delete  user</button></td>
                    </tr>
                })}
            </tbody>
        </table>
    </div>
  )
}
