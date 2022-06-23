import React, { useState } from "react";


const Child1 = ({ getusers }) => {
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
export default Child1

var allusers = [
    {
        "fname": "Anuj",
        "lname": "Beckmann",
        "tel": "(549)408-6792",
        "address": "6036 Dui Ave",
        "city": "Port Ewen",
        "state": "ID",
        "zip": 32930
    },
    {
        "fname": "Shauntell",
        "lname": "Puckett",
        "tel": "(329)713-6238",
        "address": "9190 Odio Dr",
        "city": "Brodhead",
        "state": "NH",
        "zip": 53125
    },
    {
        "fname": "Chun",
        "lname": "Linville",
        "tel": "(126)052-7925",
        "address": "3889 Elit Ave",
        "city": "St Augustine",
        "state": "CA",
        "zip": 27141
    },
    {
        "fname": "Catherine",
        "lname": "Lawrence",
        "tel": "(368)805-8306",
        "address": "4318 Tincidunt Ct",
        "city": "Ashburn",
        "state": "CO",
        "zip": 38644
    },
    {
        "fname": "Holli",
        "lname": "Rooprai",
        "tel": "(928)463-2606",
        "address": "6572 Pharetra Ave",
        "city": "Forney",
        "state": "WA",
        "zip": 79978
    }

]
