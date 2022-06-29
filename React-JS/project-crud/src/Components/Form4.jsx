import axios from 'axios'
import React,{useState} from 'react'
import { useEffect } from 'react'

const Form4 = () => {
    const [user, setuser] = useState({university:"",instite:"",branch:"",degree:"",average:"",experience:"",website:"",id:""})
    const [allusers, setallusers] = useState([])
    const [isedit, setisedit] = useState(false)
    const handlechange=(event)=>{
        var inputname=event.target.name
        const newuser={...user}
        newuser[inputname]=event.target.value
        setuser(newuser)
    }
    const getallusers=()=>{
        axios.get("http://localhost:3000/userss").then((Response)=>{
            setallusers(Response.data)
        })
    }
    const clearusers=()=>{
        setuser({university:"",instite:"",branch:"",degree:"",average:"",experience:"",website:"",id:""})
    }
    const adduser=()=>{
        console.log(user)
        axios.post("http://localhost:3000/userss",user).then((response)=>{
            console.log("user added")
            clearusers()
            getallusers()
        })
    }
    useEffect(()=>{
        getallusers()
    },[])

    const deleteuser=(userdetails)=>{
        axios.delete("http://localhost:3000/userss/"+userdetails.id).then((response)=>{
            getallusers()
        })
    }
    const edituser=(userinfo)=>{
        setisedit(true)
        setuser(userinfo)
    }
    const updateuser=()=>{
        axios.put("http://localhost:3000/userss/"+user.id,user).then(()=>{
            getallusers()
            clearusers()
            setisedit(false)
        })
    }

  return (
    <div>
        <form>
            <label htmlFor="">University</label>
            <input type="text" name="university" id="" value={user.university} onChange={(event)=>{handlechange(event)}}/><br/>
            <label htmlFor="">Instite</label>
            <input type="text" name="instite" id="" value={user.instite} onChange={(event)=>{handlechange(event)}}/><br/>
            <label htmlFor="">Branch</label>
            <input type="text" name="branch" id="" value={user.branch} onChange={(event)=>{handlechange(event)}}/><br/>
            <label htmlFor="">Degree</label>
            <input type="text" name="degree" id="" value={user.degree} onChange={(event)=>{handlechange(event)}}/><br/>
            <label htmlFor="">Average CPI</label>
            <input type="text" name="average" id="" value={user.average} onChange={(event)=>{handlechange(event)}}/><br/>
            <label htmlFor="">Experience</label>
            <input type="text" name="experience" id="" value={user.experience} onChange={(event)=>{handlechange(event)}}/><br/>
            <label htmlFor="">Your Website Or Blog</label>
            <input type="text" name="website" id="" value={user.website} onChange={(event)=>{handlechange(event)}}/><br/>
            <input type="text" name="id" hidden />
            {isedit? <button onClick={updateuser} type="button">update</button>:<button onClick={adduser} type="button">submit</button>}
        </form>
        <hr />
        <table border={1}>
            <thead>
                <tr>
                    <th>University</th>
                    <th>Instite</th>
                    <th>Branch</th>
                    <th>Degree</th>
                    <th>Average CPI</th>
                    <th>Experience</th>
                    <th>Your Website Or Blog</th>
                    <th>Delete</th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody>
                {allusers.map((userinfo,i)=>{
                    return <tr key={i}>
                        <td>{userinfo.university}</td>
                        <td>{userinfo.instite}</td>
                        <td>{userinfo.branch}</td>
                        <td>{userinfo.degree}</td>
                        <td>{userinfo.average}</td>
                        <td>{userinfo.experience}</td>
                        <td>{userinfo.website}</td>
                        <td><button onClick={()=>{edituser(userinfo)}}>edit</button></td>
                        <td><button onClick={()=>{deleteuser(userinfo)}}>detele</button></td>
                    </tr>
                })}
            </tbody>
        </table>
    </div>
  )
}

export default Form4