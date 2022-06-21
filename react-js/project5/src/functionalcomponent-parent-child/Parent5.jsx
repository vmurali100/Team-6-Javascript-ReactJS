import { useState } from "react"
import Children5 from "./Children5"

const Parent5=()=>{
    const[message,setmessage]=useState("");
    const[person,setperson]=useState({});
    const[array,setarray]=useState([])
    const sendmessage=()=>{
        setmessage("welcom to functional component")
    }
    const sendperson=()=>{
        setperson({
            fname:"nithya",
            lname:"mani"
        })
    }
    const sendarray=()=>{
        setarray(["nithya","hari","chandhini","sai"])
    }
    return(
        <div>
            <button onClick={sendmessage}>send message</button>
            <button onClick={sendperson}>send person</button>
            <button onClick={sendarray}>send array</button>
          <Children5 message={message} person={person} array={array}/>
        </div>
    )
}
export default Parent5