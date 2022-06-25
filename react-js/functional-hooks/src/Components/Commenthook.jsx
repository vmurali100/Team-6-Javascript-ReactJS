import axios from "axios"
import {useEffect, useState } from "react"
import Commenttable from "./Commenttab"

const Commenthook=()=>{
    const[coment,setComent]=useState([])
    useEffect(()=>{
       const url="http://localhost:3000/comments"
       axios.get(url).then((response)=>{setComent(response.data)})
    },[])
    return(
        <div>
          <Commenttable allcoment={coment}/>
        </div>
    )
}
export default Commenthook