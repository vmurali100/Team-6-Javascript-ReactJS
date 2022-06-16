import { useState } from "react"

export const Funcsample8 =()=>{
    const[name,setname]=useState("rohit")
    const[person,setperson]=useState({
        fname:"durga",
        lname:"boppana"
    })
    const[fruits,setfruits]=useState(["apple","banana","grapes","pineapple"])
    return(
        <div>
            <button onClick={()=>{{setname("teja")}}}>showName</button>
            <button onClick={()=>{{setperson({fname:"narendra",lname:"boppana"})}}}>showPerson</button>
            <button onClick={()=>{{setfruits(["mango","papaya","kiwi","dragonfruit"])}}}>showFruits</button>
            <p>{name}</p>
            <p>{person.fname}-{person.lname}</p>
            <ul>{fruits.map((user,i)=>{
                return <li key={i}>{user}</li>
            })}</ul>
        </div>
    )
}