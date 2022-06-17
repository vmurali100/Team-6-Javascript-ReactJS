import { useState } from "react"

export const Students = ({getData}) => {
    const [studentDetails, setstudentDetails] = useState([
        "deepthi",
        "jyothi",
        "vishnu",
        "mahitha"
    ])
    const sendDataToParent=()=>{
        getData(studentDetails)
    }
    return (
        <div>
            <button onClick={sendDataToParent}>send data to parent</button>
        </div>
    )
}