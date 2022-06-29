import axios from 'axios'
import React,{useState} from 'react'
import { useEffect } from 'react'

export const Form3 = () => {
    const [user, setuser] = useState({
        street:"",city:"",zipcode:"",country:"",id:""
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
        axios.get("http://localhost:3000/form3").then((response)=>{
            setallusers(response.data)
        })
    }
    const clearuser=()=>{
        setuser({
            street:"",city:"",zipcode:"",country:"",id:""
        })
    }
    const addUser=()=>{
        console.log(user)
        axios.post("http://localhost:3000/form3",user).then((response)=>{
            console.log("user added successfully")
            getallusers()
            clearuser()
        })
    }
    useEffect(()=>{
        getallusers()
    })
    const deleteuser=(data)=>{
        axios.delete("http://localhost:3000/form3/"+data.id).then((response)=>{
            getallusers()
        })
    }
    const edituser=(data)=>{
        setuser(data)
        setisEdit(true)
    }
    const updateuser=()=>{
        axios.put("http://localhost:3000/form3/"+user.id,user).then((response)=>{
            getallusers()
            setisEdit(false) 
            clearuser()
        })
    }
  return (
    <div>
        <form>
            <label htmlFor="street">street</label>
            <input type="text" name="street" value={user.street} onChange={(event)=>{handleChange(event)}} /><br/>

            <label htmlFor="city">city,state</label>
            <input type="text" name="city" value={user.city} onChange={(event)=>{handleChange(event)}} /><br/>

            <label htmlFor="zipcode">zipcode</label>
            <input type="text" name="zipcode" value={user.zipcode} onChange={(event)=>{handleChange(event)}} /><br/>

            <label htmlFor="country">country</label>
            <input type="text" name="country" value={user.country} onChange={(event)=>{handleChange(event)}} /><br/>
            <input type="text" name="id" id="" hidden/>

            {isEdit ? <button onClick={updateuser}>update user</button> : <button onClick={addUser} type="button">add user</button>}
           
            
        </form>
        <hr />
        <table border={1}>
            <thead>
                <tr>
                    <th>street</th>
                    <th>city,state</th>
                    <th>zipcode</th>
                    <th>country</th>
                    <th>edit user</th>
                    <th>deleteuser</th>
                </tr>
            </thead>
            <tbody>
                {allusers.map((data,i)=>{
                    return <tr key={i}>
                        <td>{data.street}</td>
                        <td>{data.city}</td>
                        <td>{data.zipcode}</td>
                        <td>{data.country}</td>
                        <td><button onClick={()=>{edituser(data)}}>edit user</button></td>
                        <td><button onClick={()=>{deleteuser(data)}}>delete user</button></td>
                    </tr>
                })}
            </tbody>
        </table>
    </div>
  )
}
