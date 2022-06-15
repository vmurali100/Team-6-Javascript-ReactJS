import { useState } from "react"

export const Sample6FunComp = () =>{

    const [myFlower, setmyFlower]=useState("Rose")
    const [flowerName, setFlowerName]=useState({
        Name1:"Lotus",
        Name2:"Jasmine",
        Name3:"Sunflower",
        Name4:"Daisy"
    })
    const [Colour, setColour]=useState(["Red","Green","Yellow"])
    return (
        <div>
            <button onClick={()=>{setmyFlower("Lotus")}}>Display Flowers</button>
            <button onClick={()=>{setFlowerName({Name1:"Pink",Name2:"White",Name3:"Yellow",Name4:"white & yellow"})}}>Display Name</button>
            <button onClick={()=>{setColour(["Yellow","Red","Green"])}}>Display Colour</button> 
            <h3>My Flower Name is: {myFlower}</h3>
            <p>{flowerName.Name1}-{flowerName.Name2}-{flowerName.Name3}-{flowerName.Name4}</p>
            <ul>{Colour.map((natural,i)=>{
                return <li key={i}>{natural}</li>
            })}</ul>
        </div>
    )
}