import { useState } from "react"
import { FilltextChild4 } from "./FilltextChild4"

export const FilltextParent4 = ()=>{
    const [filltextDetails, setfilltextDetails]=useState([])
    const sendFilltext =()=>{
        setfilltextDetails(allFilltext)
    }
    return (
        <div>
            <button onClick={sendFilltext}>Send Filltext</button>
            <FilltextChild4 filltextDetails={filltextDetails}/>
        </div>
    )
}
var allFilltext = [
    {
        "id": 1,
        "email": "PToothman@turpis.io",
        "username": "TEtheridge",
        "password": "qFFeE"
    },
    {
        "id": 2,
        "email": "MSanchez@porttitor.gov",
        "username": "NMoccio",
        "password": "Qpzko"
    },
    {
        "id": 3,
        "email": "JReese@ac.gov",
        "username": "CMaclatchie",
        "password": "3N0tG"
    },
    {
        "id": 4,
        "email": "BStephens@curabitur.com",
        "username": "MGentenaar",
        "password": "vQNgu"
    },
    {
        "id": 5,
        "email": "CCrosswhite@et.com",
        "username": "JShapiro",
        "password": "2ogrl"
    },
    {
        "id": 6,
        "email": "MEubanks@consectetur.gov",
        "username": "RWantland",
        "password": "kX6iB"
    },
    {
        "id": 7,
        "email": "EOwens@adipiscing.io",
        "username": "JBullock",
        "password": "AbD2M"
    },
    {
        "id": 8,
        "email": "KMcmillan@et.net",
        "username": "ERager",
        "password": "uqfgc"
    },
    {
        "id": 9,
        "email": "LPfeifer@lacus.com",
        "username": "AHaga",
        "password": "6LipX"
    },
    {
        "id": 10,
        "email": "SBlackburn@nullam.net",
        "username": "GPrezzavento",
        "password": "D0GPi"
    }
]