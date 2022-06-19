import { useState } from "react"
import PreTrueDiv from "./PreTrueDiv"
import PreTrueTable from "./PreTrueTable"

const PreTrue=()=>{
    const[truee,settrue]=useState(alltrue)
    return(
        <div>
            <PreTrueDiv truee={truee}/>
            <PreTrueTable truee={truee}/>
        </div>
    )
}
export default PreTrue

var alltrue=[
    {
        "fname": "Roya",
        "lname": "Griebel"
    },
    {
        "fname": "Kaiti",
        "lname": "Harkema"
    },
    {
        "fname": "Dwarika",
        "lname": "Kenedy"
    },
    {
        "fname": "Maira",
        "lname": "Crewell"
    },
    {
        "fname": "Bridgette",
        "lname": "Herbert"
    },
    {
        "fname": "Suanne",
        "lname": "Vyater"
    },
    {
        "fname": "Johnathan",
        "lname": "Correll"
    },
    {
        "fname": "Joslyn",
        "lname": "Welld"
    },
    {
        "fname": "Winnie",
        "lname": "Grimm"
    },
    {
        "fname": "Frances",
        "lname": "Eseltine"
    }
]