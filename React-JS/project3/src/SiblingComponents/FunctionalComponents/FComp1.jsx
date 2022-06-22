import React,{useState} from 'react'
 
const FComp1 = ({sendMessage}) => {
const [Message,setMessage] = useState("A MansurVali");
  return (
    <div>
        <p>FComp1</p>

        <button onClick={()=>{sendMessage(Message)}}>Send Message</button>
    </div>
  )
}

export default FComp1