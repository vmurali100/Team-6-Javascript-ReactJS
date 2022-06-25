import { useState } from "react"
import { Comp1 } from "./Comp1"
import { Comp2 } from "./Comp2"

export function Parentclass(){
    const [mes,setmes]= useState("")
    const [per,setper]= useState({})
    const [use,setuse]= useState([])

    function semessage(message){
        setmes(message)
    }

    function seperson(person){
        setper(person)
    }

    function seuser(userinfo){
        setuse(userinfo)
    }

    return <div>
       <Comp1 semessage={semessage} seperson={seperson} seuser={seuser}/>
       <Comp2  message={message} person={person} users={users}/>
    </div>
}