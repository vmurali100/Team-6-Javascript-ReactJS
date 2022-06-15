import React,{useState} from "react"
export const Sample1FunComp = () =>{

    const [myPhone, setmyPhone]=useState("Mobiles")
    const [model, setmodel]=useState({
        Name: "Moto",
        Colour: "Black",
    })
    const [Names, setNames]=useState(["Oppo","Moto","Apple","OnePlus"])
    return(
        <div>
            <button onClick={()=>{setmyPhone("Lava")}}>Display my Phone</button>

            <button onClick={()=>{setmodel({Name:"Moto X4",Colour:"white"})}}>Display Model</button>

            <button onClick={()=>{setNames(["vidya","vasu","Charan"])}}>Displya Names</button>

            <h2>My Name is : {myPhone}</h2>

            <p>{model.Name}-{model.Colour}</p>
            
            <ul>{Names.map((user,i)=>{
                return <li key={i}>{user}</li>
            })}</ul>
        </div>
    )
}