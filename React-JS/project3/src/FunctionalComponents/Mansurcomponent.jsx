import { useState } from "react"

export const Mansurcomponent = () => {
    const [myName, setMyname] = useState("A Mansur Vali");
    return <div>
        <button onClick={()=>{setMyname("Naveen")}}>Change My Name</button>
        <h1>My Name :{myName}</h1>
    </div>
};