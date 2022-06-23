import { useState } from "react"
import { Child5FilltextUser } from "./Child5FilltextUser"

export const Parent5FilltextUser =()=>{
    const [Allusers,setAllusers]=useState([])
    const SenddatatoChild=()=>{
        setAllusers(Filltextallusers)
    }
    return (
        <div>
            <button onClick={SenddatatoChild}>SenddatatoChild</button>
            <Child5FilltextUser Allusers={Allusers}/>
        </div>
    )
}
var Filltextallusers =[
    {
        "fname": "Inho",
        "lname": "Boyd"
    },
    {
        "fname": "Daisy",
        "lname": "Briley"
    },
    {
        "fname": "Amatullah",
        "lname": "Merkel"
    },
    {
        "fname": "Nirmal",
        "lname": "Freeburg"
    },
    {
        "fname": "Kareemah",
        "lname": "Phillips"
    },
    {
        "fname": "Emir",
        "lname": "Hettrick"
    },
    {
        "fname": "Bridgette",
        "lname": "Gentenaar"
    },
    {
        "fname": "Victor",
        "lname": "Dunlap"
    },
    {
        "fname": "Clayton",
        "lname": "Elkins"
    },
    {
        "fname": "Lilia",
        "lname": "Lannatewitz"
    }
]