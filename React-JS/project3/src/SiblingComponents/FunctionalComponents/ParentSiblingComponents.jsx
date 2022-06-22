 import React,{useState} from 'react'
import FComp1 from './FComp1'
import FComp2 from './FComp2'
 
 function ParentSiblingComponents() {
    const [Message, setMessage] = useState("")
    
    const sendMessage=(Message)=>{
      setMessage(Message)
    }
   return (
     <div>
        <p>ParentSiblingComponents</p>
        <FComp1 sendMessage={sendMessage}/>
          <FComp2 Message={Message}/>

     </div>
   )
 }
 
 export default ParentSiblingComponents