import React,{useState} from "react"
import Card from "./Card"
import Filtextusertable from "./Filtexusertable" //parent chids-card,filtexttable

const Filtextuses=()=>{
    const [Filtextuses,setfiltextuses]=useState(allusers)
    return (
        <div>
           <Filtextusertable Filtextuses={Filtextuses}/>
           
           <Card Filtextuses={Filtextuses}/>
            </div>
    )
}
export default Filtextuses
var allusers=[
    {
        "fname": "Sarah",
        "lname": "Saur",
        "tel": "(919)389-1001",
        "address": "6548 Magna Ln",
        "city": "Flushing",
        "state": "NY",
        "zip": 27707
    },
    {
        "fname": "Ade",
        "lname": "Swift",
        "tel": "(118)864-7163",
        "address": "3319 Ipsum Ave",
        "city": "Kingsville",
        "state": "ND",
        "zip": 57030
    },
    {
        "fname": "Arzak",
        "lname": "Little",
        "tel": "(474)749-7621",
        "address": "6925 Aenean Ave",
        "city": "Fort Bragg",
        "state": "MI",
        "zip": 26437
    },
    {
        "fname": "Biswajit",
        "lname": "Boudreau",
        "tel": "(375)308-9356",
        "address": "7811 Eget Dr",
        "city": "Virginia Beach",
        "state": "ND",
        "zip": 12509
    },
    {
        "fname": "Rachelle",
        "lname": "Absalom",
        "tel": "(244)459-7642",
        "address": "9499 Ac Rd",
        "city": "Phoenix",
        "state": "ND",
        "zip": 59357
    },
    {
        "fname": "Tracey",
        "lname": "Nguyen",
        "tel": "(662)360-4020",
        "address": "4789 Dolor Ct",
        "city": "Hobbs",
        "state": "NJ",
        "zip": 78780
    },
    {
        "fname": "Sue",
        "lname": "Pomykala",
        "tel": "(734)914-2598",
        "address": "5353 Vitae Rd",
        "city": "Salt Lake City",
        "state": "OK",
        "zip": 17229
    },
    {
        "fname": "Rosie",
        "lname": "Lewis",
        "tel": "(196)068-7172",
        "address": "7422 Mi Ave",
        "city": "Thomaston",
        "state": "AL",
        "zip": 53856
    },
    {
        "fname": "Cynthia",
        "lname": "Deskins",
        "tel": "(730)078-7646",
        "address": "3485 Morbi Ct",
        "city": "Lockport",
        "state": "TN",
        "zip": 51876
    },
    {
        "fname": "Michael",
        "lname": "Ramirez",
        "tel": "(507)693-6685",
        "address": "3333 Curabitur Ct",
        "city": "Rancho Cordova",
        "state": "AR",
        "zip": 92936
    }
]