import React, { useState } from "react";


const Child2 = ({ getusers }) => {
    const [users, setusers] = useState(allusers)

    const SendDataToParent = () => {
        getusers(users)
    }
    return (
        <div>
            <button onClick={SendDataToParent}>SendData Child To Parent Components</button>


        </div>
    )
}
export default Child2

var allusers = [
    {
        "fname": "Cathleen",
        "lname": "Kelly"
    },
    {
        "fname": "Hector",
        "lname": "Rossi"
    },
    {
        "fname": "Luping",
        "lname": "Ptacek"
    },
    {
        "fname": "Nishal",
        "lname": "Hadley"
    },
    {
        "fname": "Yeqing",
        "lname": "Branscombe"
    }
]
