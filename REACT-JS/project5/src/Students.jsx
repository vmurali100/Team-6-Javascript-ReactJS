import React,{useState} from "react";

const Students=({getData})=>{
    const [studentdetails,setstudentdetails]=useState([
        "abhi",
        "banu",
        "kumari",
        "ram",
        "venkat"

    ]);
    const sendDatatoparant=()=>{
        getData()
    }
    return <div>
        <button onClick={sendDatatoparant}>sendDatatoparant</button>
        {/* <P>Student Details From Child</P> */}
        </div>;
};
export default Students;