import { useState } from "react"
import { FilltextChild5 } from "./FilltextChild5"

export const FilltextParent5 = () =>{
    const [filltextDetails, setfilltextDetails]=useState([])
    const sendfilltext = ()=>{
        setfilltextDetails(allFilltexts)
    }
    return (
        <div>
            <button onClick={sendfilltext}>Send Filltext</button>
            <FilltextChild5 getData={filltextDetails}/>
        </div>
    )
}
var allFilltexts= [
    {
        "fname": "Jayne",
        "lname": "Steward",
        "tel": "(350)344-7237",
        "address": "3768 Tortor Ln",
        "city": "Wheeling",
        "state": "NY",
        "zip": 90829
    },
    {
        "fname": "Gerarld",
        "lname": "Hammant",
        "tel": "(140)285-1704",
        "address": "2472 Malesuada Ct",
        "city": "Prattville",
        "state": "VA",
        "zip": 13216
    },
    {
        "fname": "Kosta",
        "lname": "Pyle",
        "tel": "(508)470-9600",
        "address": "2571 Mi St",
        "city": "Sinton",
        "state": "NJ",
        "zip": 53066
    },
    {
        "fname": "Ronald",
        "lname": "Burks",
        "tel": "(536)846-1970",
        "address": "9075 Sapien St",
        "city": "Leawood",
        "state": "MD",
        "zip": 77870
    },
    {
        "fname": "Trinelveli",
        "lname": "Nguyen",
        "tel": "(276)573-3013",
        "address": "3421 Magna Rd",
        "city": "Detroit",
        "state": "AR",
        "zip": 95492
    },
    {
        "fname": "John",
        "lname": "Darrah",
        "tel": "(627)125-7201",
        "address": "6830 Risus Ave",
        "city": "Akron",
        "state": "VT",
        "zip": 19950
    },
    {
        "fname": "Timika",
        "lname": "Bessko",
        "tel": "(727)139-7661",
        "address": "5405 Dolor Dr",
        "city": "Alexandria",
        "state": "OH",
        "zip": 46562
    },
    {
        "fname": "Guy",
        "lname": "Swetland",
        "tel": "(271)560-4758",
        "address": "9229 Sed Rd",
        "city": "Mansfield",
        "state": "AL",
        "zip": 99980
    },
    {
        "fname": "Pelagija",
        "lname": "Walters",
        "tel": "(894)118-2609",
        "address": "9372 Libero Ln",
        "city": "Tinley Park",
        "state": "AR",
        "zip": 77652
    },
    {
        "fname": "Manolo",
        "lname": "Batrouny",
        "tel": "(305)331-6490",
        "address": "1399 Morbi Ln",
        "city": "Lacey",
        "state": "WI",
        "zip": 43741
    }
]