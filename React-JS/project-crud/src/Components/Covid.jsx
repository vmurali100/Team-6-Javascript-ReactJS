import axios from 'axios'
import React,{useState} from 'react'
import { useEffect } from 'react'

const covid = () => {
    const [user, setuser] = useState({recovered:"",tested:"",vaccinated1:"",vaccinated2:""})
    const [alluser, setalluser] = useState([])
    const [isedit,setisedit]=useState(false)
  const hanlechange=(event)=>{
        var inputname=event.target.name
        const newuser={...user}
        newuser[inputname]=event.target.value
        setuser(newuser)
  }
  const getallusers=()=>{
    axios.get("http://localhost:3000/covid").then((response)=>{
        setalluser(response.data)
    })
  }
  const clearusers=()=>{
    setuser ({recovered:"",tested:"",vaccinated1:"",vaccinated2:""})
  }
 const adduser=()=>{
    console.log(user)
    axios.post("http://localhost:3000/covid",user).then((response)=>{
        console.log("user added successfully")
        clearusers()
        getallusers()
    })
  }
  useEffect(()=>{
    getallusers()
  },[])
  const deleteuser=(userdetails)=>{
    axios.delete("http://localhost:3000/covid/"+userdetails.id).then((response)=>{
        getallusers()
    })
  }
  const edituser=(userinfo)=>{
    setisedit(true)
    setuser(userinfo)
  }
  const updateuser=()=>{
    axios.put("http://localhost:3000/covid/"+user.id,user).then(()=>{
        getallusers()
        clearusers()
        setisedit(false)
    })
  }
  return (
    <div>
        <form>
        <label htmlFor="">recovered</label>
        <input type="text" name="recovered" id="" value={user.recovered} onChange={(event)=>{hanlechange(event)}}/><br></br>
        <label htmlFor="">tested</label>
        <input type="text" name="tested" id="" value={user.tested} onChange={(event)=>{hanlechange(event)}}/><br></br>
        <label htmlFor="">vaccinated1</label>
        <input type="text" name="vaccinated1" id="" value={user.vaccinated1} onChange={(event)=>{hanlechange(event)}}/><br></br>
        <label htmlFor="">vaccinated2</label>
        <input type="text" name="vaccinated2" id="" value={user.vaccinated2} onChange={(event)=>{hanlechange(event)}}/><br></br>
        <input type="text" name="id" />
        {isedit? <button onClick={updateuser} type="button">Update user</button>:<button onClick={adduser} type="button">Sumbit</button>}
        </form>
        <hr />
        <table border={1}>
            <thead>
                <tr>
                    <th>recovered</th>
                    <th>tested</th>
                    <th>vaccinated1</th>
                    <th>vaccinated2</th>
                    
                </tr>
            </thead>
            <tbody>
                {
                    alluser.map((userinfo,i)=>{
                        return <tr key={i}>
                            <td>{userinfo.recovered}</td>
                            <td>{userinfo.tested}</td>
                            <td>{userinfo.vaccinated1}</td>
                            <td>{userinfo.vaccinated2}</td>
                            <td><button onClick={()=>{edituser(userinfo)}}>edit user</button></td>
                            <td><button onClick={()=>{deleteuser(userinfo)}}>delete user</button></td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default covid