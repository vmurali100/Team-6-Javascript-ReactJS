import React,{useState} from "react"
export const Sample5FunComp = () =>{

    const [myfood, setmyfood]=useState("Chicken")
    const [various, setvarious]=useState({
        Name1: "DhumBiryani",
        Name2: "MuttonBiryani",
        Name3: "ChickenDhum"
    })
    const [Names, setNames]=useState(["Thandoori","Wings","Lolipups"])
    return(
        <div>
            <button onClick={()=>{setmyfood("Fish Fry")}}>Display my Phone</button>

            <button onClick={()=>{setvarious({Name1:"Chilli Chicken",Name2:"chicken Fry",Name3:"chicken 65"})}}>Display Model</button>

            <button onClick={()=>{setNames(["Fish","Prance","Crab"])}}>Displya Names</button>

            <h2>My Name is : {myfood}</h2>

            <p>{various.Name1}-{various.Name2}-{various.Name3}</p>
            
            <ul>{Names.map((sples,i)=>{
                return <li key={i}>{sples}</li>
            })}</ul>
        </div>
    )
}