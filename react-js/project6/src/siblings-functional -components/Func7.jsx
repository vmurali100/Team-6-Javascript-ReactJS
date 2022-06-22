import { useState } from "react"

export const Func7=({sendfactory,factory,sendlabour,labour,sendworkers,workers})=>{
  const[]=useState(
    factory="Indian pvt ltd",
    labour={
        fname:"girjesh",
        lname:"singh"
    },
    workers=["naveen","hareesh","kiran","arun"]
  )
  return(
    <div>
          <button onClick={()=>{sendfactory(factory)}}>send factory</button>
          <button onClick={()=>{sendlabour(labour)}}>send labour</button>
          <button onClick={()=>{sendworkers(workers)}}>send workers</button>
    </div>
    
  )
}