import axios from 'axios'
import React,{useEffect, useState} from 'react'

export const Form2 = () => {
    const [user, setuser] = useState({
        Name:"",Username:"",Email:"",Password:"",ConfirmPassword:"",message:""
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
        axios.get("http://localhost:3000/form2").then((response)=>{
            setallusers(response.data)
        })
    }
    const clearform=()=>{
        setuser({Name:"",Username:"",Email:"",Password:"",ConfirmPassword:"",message:""})
    }
    const addUser=()=>{
        console.log(user)
        axios.post("http://localhost:3000/form2",user).then((response)=>{
            console.log("user added successfully")
            getallusers()
            clearform()
        })
    }
    useEffect(()=>{
        getallusers()
    })
    const deleteuser=(data)=>{
        axios.delete("http://localhost:3000/form2/"+data.id).then((response)=>{
            getallusers()
        })
    }
    const edituser=(data)=>{
        setuser(data)
        setisEdit(true)
    }
    const updateuser=(data)=>{
        axios.put("http://localhost:3000/form2/"+user.id,user).then(()=>{

            getallusers()
            setisEdit(true)
            clearform()
        })
    }
  return (
    <div>
        <form>
            <label htmlFor="Name">Name</label>
            <input type="text" name="Name" value={user.Name} onChange={(event)=>{handleChange(event)}} /><br/>

            <label htmlFor="Username">Username</label>
            <input type="text" name="Username" value={user.Username} onChange={(event)=>{handleChange(event)}} /><br/>

            <label htmlFor="Email">Email</label>
            <input type="text" name="Email" value={user.Email} onChange={(event)=>{handleChange(event)}} /><br/>

            <label htmlFor="Password">Password</label>
            <input type="text" name="Password" value={user.Password} onChange={(event)=>{handleChange(event)}} /><br/>

            <label htmlFor="ConfirmPassword">ConfirmPassword</label>
            <input type="Password" name="ConfirmPassword" value={user.ConfirmPassword} onChange={(event)=>{handleChange(event)}} /><br/>

            <label htmlFor="message">message</label>
            <input type="text" name="message" value={user.message} onChange={(event)=>{handleChange(event)}} /><br/>

                {isEdit ?  <button onClick={updateuser}>update user</button> :<button onClick={addUser} type="button">adduser</button>}

        </form>
    <hr />
    <table border={1}>
        <thead>
            <tr>
                <th>Name</th>
                <th>Username</th>
                <th>email</th>
                <th>Password</th>
                <th>ConfirmPassword</th>
                <th>message</th>
                <th>edit user</th>
                <th>delete user</th>
            </tr>
        </thead>
        <tbody>
            {allusers.map((data,i)=>{
                return <tr key={i}>
                    <td>{data.Name}</td>
                    <td>{data.Username}</td>
                    <td>{data.Email}</td>
                    <td>{data.Password}</td>
                    <td>{data.ConfirmPassword}</td>
                    <td>{data.message}</td>
                    <td><button onClick={()=>{edituser(data)}}>edit user</button></td>
                    <td><button onClick={()=>{deleteuser(data)}}>delete user</button></td>
                </tr>
            })}
        </tbody>
    </table>

    </div>
  )
}
