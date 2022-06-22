import { useState } from "react"
import { Func7 } from "./Func7"
import { Func8 } from "./Func8"

export const Func7and8=()=>{
    const[factory,setfactory]=useState("")
    const[labour,setlabour]=useState({})
    const[workers,setworkers]=useState([])

    const sendfactory=(factory)=>{
        setfactory(factory)
    }
    const sendlabour=(labour)=>{
          setlabour(labour)
    }
    const sendworkers=(workers)=>{
        setworkers(workers)
    }
    return(
        <div>
            <Func7 sendfactory={sendfactory} sendlabour={sendlabour} sendworkers={sendworkers} />
            <Func8 factory={factory} labour={labour} workers={workers} />
        </div>
    )
}