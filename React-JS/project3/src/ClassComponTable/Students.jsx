import { useState } from "react"

const Students = (getdata) => {
    const [setstudents, setstusentsdetails] = useState([
        "govintha",
        "perumane", 
        "krishna", 
        "kanna"])
        const senddatatoparent=()=>{
            getdata(setstudents)
        }
    return (
        <div>
            <button onClick={senddatatoparent}>send data to parent</button>
        </div>
    )
}
export default Students 