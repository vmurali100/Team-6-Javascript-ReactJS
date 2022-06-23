import { useState } from "react"

export const Filltext3Child =({GetData})=>{
    const [userDetails,setUserDetails]=useState(allusers)
    const  sendDataToParent=()=>{
        GetData(userDetails)
    }
    return(
        <div>
            <button onClick={sendDataToParent}>SendData2Par</button>
        </div>
    )
}
var allusers=[
    {
        "fname": "Alisa",
        "lname": "Johnson",
        "tel": "(386)088-0770",
        "address": "6059 Amet Ct",
        "city": "Corwith",
        "state": "AL",
        "zip": 25903
    },
    {
        "fname": "Noor",
        "lname": "Haugland",
        "tel": "(232)170-1372",
        "address": "5363 Tellus St",
        "city": "Middletown",
        "state": "MS",
        "zip": 85001
    },
    {
        "fname": "Gill",
        "lname": "Carson",
        "tel": "(180)099-1702",
        "address": "9796 Fringilla Rd",
        "city": "Clayton",
        "state": "AL",
        "zip": 92066
    },
    {
        "fname": "Tinesa",
        "lname": "Royer",
        "tel": "(568)968-4364",
        "address": "4648 Lacus Ct",
        "city": "Oakland",
        "state": "MS",
        "zip": 64714
    },
    {
        "fname": "Marcellin",
        "lname": "Star",
        "tel": "(330)126-5615",
        "address": "3319 Amet Ave",
        "city": "Beaumont",
        "state": "OH",
        "zip": 54009
    },
    {
        "fname": "Martie",
        "lname": "Wade",
        "tel": "(269)239-1671",
        "address": "1853 Lacus Ct",
        "city": "Hudsonville",
        "state": "AL",
        "zip": 85576
    },
    {
        "fname": "Dorota",
        "lname": "Muzyka",
        "tel": "(156)899-3669",
        "address": "8416 Sit Rd",
        "city": "Brooklyn",
        "state": "ID",
        "zip": 90262
    },
    {
        "fname": "Mario",
        "lname": "Leon",
        "tel": "(729)198-2372",
        "address": "1536 Donec Rd",
        "city": "Sarasota",
        "state": "MN",
        "zip": 29115
    },
    {
        "fname": "Marcellous",
        "lname": "Cantu",
        "tel": "(339)549-2667",
        "address": "2459 Mattis St",
        "city": "Cumberland",
        "state": "IA",
        "zip": 92841
    },
    {
        "fname": "Mosharraf",
        "lname": "Fitf",
        "tel": "(588)659-6880",
        "address": "6581 Placerat Dr",
        "city": "Chicago",
        "state": "LA",
        "zip": 43477
    }
]