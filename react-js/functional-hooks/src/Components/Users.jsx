import React,{useEffect,useState} from "react"
import axios from 'axios'
import Userstable from "./Userstable"

const Users=()=>{
    const [allUsers, setAllUsers] = useState([])
    useEffect(()=>{
        const url="http://localhost:3000/data"
          axios.get(url).then((response)=>{setAllUsers(response.data)})
    },[])
    return(
        <div>
            <Userstable filtextusers={allUsers}/>
        </div>
    )
}
export default Users