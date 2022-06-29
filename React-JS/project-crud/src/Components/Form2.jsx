import axios from 'axios'
import React,{useState} from 'react'
import { useEffect } from 'react'

const Form2 = () => {
    const [address, setaddress] = useState({street:"",city:"",zip:"",country:""})
    const [alladdress, setalladdress] = useState([])
    const [isedit, setisedit] = useState([])
    const handlechange=(event)=>{
        var inputname=event.target.name
        const newaddress={...address}
        newaddress[inputname]=event.target.value
        setaddress(newaddress)
    }
    const getalladdress=()=>{
        axios.get("http://localhost:3000/userss").then((response)=>{
            setalladdress(response.data)
        })
    }
    const clearaddress=()=>{
        setaddress({street:"",city:"",zip:"",country:""})
    }
    const addaddress=()=>{
        console.log(address)
        axios.post("http://localhost:3000/userss",address).then((response)=>{
            console.log("user added")
            clearaddress()
            getalladdress()
        })
    }
    useEffect(()=>{
        getalladdress()
    },[])
    const deleteaddress=(addressdetails)=>{
        axios.delete("http://localhost:3000/userss/"+addressdetails.id).then((response)=>{
            getalladdress()
        })
    }
    const editaddress=(user)=>{
       setisedit(true)
       setaddress(user)
    }
    const updateaddress=()=>{
        axios.put("http://localhost:3000/userss/"+address.id.address).then(()=>{
            getalladdress()
            clearaddress()
            setisedit(false)
        })
    }
  return (
    <div>
        <form>
            <label htmlFor="">Street</label>
            <input type="text" name="street" id="" value={address.street} onChange={(evet)=>{handlechange(evet)}}/><br></br>
            <label htmlFor="">City,State</label>
            <input type="text" name="city" id="" value={address.city} onChange={(evet)=>{handlechange(evet)}}/><br></br>
            <label htmlFor="">Zip Code</label>
            <input type="text" name="zip" id="" value={address.zip} onChange={(evet)=>{handlechange(evet)}}/><br></br>
            <label htmlFor="">Country</label>
            <input type="text" name="country" id="" value={address.country} onChange={(evet)=>{handlechange(evet)}}/><br></br>
            {isedit? <button onClick={addaddress} type="button">submit</button>:<button onClick={updateaddress} type="button">update</button>}
           
        </form>
        <hr/>
        <table border={1}>
            <thead>
                <tr>
                    <th>Street</th>
                    <th>City,State</th>
                    <th>Zip code</th>
                    <th>Country</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {alladdress.map((user,i)=>{
                    return <tr key={i}>
                        <td>{user.street}</td>
                        <td>{user.city}</td>
                        <td>{user.zip}</td>
                        <td>{user.country}</td>
                        <td><button onClick={()=>{editaddress (user)}}>edit</button></td>
                        <td><button onClick={()=>{deleteaddress (user)}}>delete</button></td>
                    </tr>
                })}
            </tbody>
        </table>
    </div>
  )
}

export default Form2