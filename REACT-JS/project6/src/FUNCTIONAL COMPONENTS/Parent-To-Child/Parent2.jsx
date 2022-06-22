import React, { useState } from "react";
import Child2 from "./Child2"

const Parent2 = () => {
    const [users, setusers] = useState([])


    const SendDataToChild = () => {
        setusers(allusers)
    }
    return (
        <div>
            <button onClick={SendDataToChild}>Send Data parent To Child Components</button>

            <Child2 users={users} />
        </div>
    )
}
export default Parent2;

var allusers = [

    {
        "fname": "Nadirah",
        "lname": "Hesler"
    },
    {
        "fname": "Arzak",
        "lname": "Silverstein"
    },
    {
        "fname": "Roberta",
        "lname": "Arreguin"
    },
    {
        "fname": "Sherese",
        "lname": "Paullin"
    },
    {
        "fname": "April",
        "lname": "Kasnow"
    }
]
