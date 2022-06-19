import { useState } from "react";
import User from "./User";

function Bpp(){
    const [person,setperson]=useState({fname:"akalyak",lname:"krishna"})
    return(
        <div>
            <User userdetails={person}/>
        </div>
    )
}
export default Bpp;