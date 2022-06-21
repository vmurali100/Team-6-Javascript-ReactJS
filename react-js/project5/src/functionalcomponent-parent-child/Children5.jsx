import React from "react"

const Children5=({message,person,array})=>{
    
    return(
        <div>
            {message &&  <p>message from parent component:{message}</p>}
         {Object.keys(person).length > 0 && <p>person from parent :{person.fname}-{person.lname}</p>}
          {array.length > 0 && <ul>
            
                {array.map((arr,i)=>{
                   return <li key={i}>{arr}</li>
                })
            }
          </ul>}
          
        </div>
    )
}
export default Children5