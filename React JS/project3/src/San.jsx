import { useState } from "react";

export function San(){
    const [sa,setse]=useState ({
        fname:"santhosh",
        lname:"kumar"
  })
  return <div>
    <h1>{sa.fname}-{sa.lname}</h1>
  </div>
}
