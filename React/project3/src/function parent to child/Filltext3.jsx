import { useState } from "react"
import { FilltextChild3 } from "./FilltextChild3"

export const Filltext3 =()=>{
    const[filltextusers,setfilltextusers]=useState(allusers)
    return(
        <div>
            <FilltextChild3 filltextDetails={filltextusers}/>
        </div>
    )
}
var allusers=[
    {
        "fname": "Neil",
        "lname": "Maynard"
    },
    {
        "fname": "Sidney",
        "lname": "Vickers"
    },
    {
        "fname": "Tomi",
        "lname": "Paluszek"
    },
    {
        "fname": "Vernell",
        "lname": "Mahajan"
    },
    {
        "fname": "Denise",
        "lname": "Atheya"
    },
    {
        "fname": "Elsuhaili",
        "lname": "Koehn"
    },
    {
        "fname": "Julie",
        "lname": "Yach"
    },
    {
        "fname": "Cori",
        "lname": "Grimsley"
    },
    {
        "fname": "Alfonso",
        "lname": "Haggerty"
    },
    {
        "fname": "Tobias",
        "lname": "Kyger"
    }
]