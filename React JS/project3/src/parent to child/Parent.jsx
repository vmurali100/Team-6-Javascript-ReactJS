import { Child } from "./Child";

const { useState } = require("react");

 export function Parent(){
    const [mes,setmes]= useState("")
    const [per,setper]= useState({})
    const [use,setuse]= useState([])

    function string(){
        setmes("hello")
    }

    function object(){
        setper({
            fname:"santhosh",
            lname:"B"
        })
    }

    function array(){
        setuse(["tiger","lion","cheeta"])
    }

    return <div>
        <button onClick={string}>click</button>

        <button onClick={object}>click</button>

        <button onClick={array}>click</button>
        
      <Child mes={mes} per={per} use={use}/>
    </div>
}