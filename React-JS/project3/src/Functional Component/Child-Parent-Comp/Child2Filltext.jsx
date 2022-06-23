import { useState } from "react"

export const Child2Filltext = ({getdata}) => {
    const[userDetails,setuserDetails]=useState(allusers)
    const SenddatatoParent=()=>{
        getdata(userDetails)
    }
    return(
        <div>
            <button onClick={SenddatatoParent}>SenddataToParent</button>
        </div>
    )
}
var allusers=[
    {
        "fname": "Julius",
        "lname": "Pereyra",
        "tel": "(619)820-5157",
        "address": "4709 Lectus Dr",
        "city": "Saltilo",
        "state": "NH",
        "zip": 46856
    },
    {
        "fname": "Serena",
        "lname": "Massey",
        "tel": "(325)461-3911",
        "address": "4121 Rutrum St",
        "city": "Kingwood",
        "state": "WA",
        "zip": 45989
    },
    {
        "fname": "Gerard",
        "lname": "Elkins",
        "tel": "(466)262-3458",
        "address": "5688 Ipsum Rd",
        "city": "Fort Bragg",
        "state": "IN",
        "zip": 62242
    },
    {
        "fname": "Stuart",
        "lname": "User",
        "tel": "(506)260-3869",
        "address": "3437 Mi Ct",
        "city": "Killeen",
        "state": "MI",
        "zip": 92825
    },
    {
        "fname": "Keith",
        "lname": "Dinkel",
        "tel": "(661)138-8184",
        "address": "6417 Neque Ln",
        "city": "Seaside",
        "state": "MN",
        "zip": 26647
    },
    {
        "fname": "Rashad",
        "lname": "Zehnacker",
        "tel": "(242)526-0522",
        "address": "5486 Sollicitudin Ct",
        "city": "Temecula",
        "state": "AL",
        "zip": 83495
    },
    {
        "fname": "Corey",
        "lname": "Soo",
        "tel": "(979)297-9665",
        "address": "5235 Et Ave",
        "city": "Salem",
        "state": "OH",
        "zip": 59189
    },
    {
        "fname": "Julie",
        "lname": "Trrenkler",
        "tel": "(145)312-1198",
        "address": "5775 Consequat St",
        "city": "Allentown",
        "state": "WY",
        "zip": 25218
    },
    {
        "fname": "Theodora",
        "lname": "Dunn",
        "tel": "(827)174-6951",
        "address": "9717 Vestibulum St",
        "city": "Rawlins",
        "state": "TN",
        "zip": 77656
    },
    {
        "fname": "Lois",
        "lname": "Burkhardt",
        "tel": "(883)879-6953",
        "address": "1886 Aliquam St",
        "city": "Middleburg",
        "state": "AK",
        "zip": 38916
    }
]