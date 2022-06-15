import { useState } from "react"

export const Sample10FunComp = () =>{

    const [company, setCompany]=useState("Apple")
    const [mobiles, setMobiles]=useState({
        mobile1: "Moto",
        Colour:"Black",
        Model: "X4",
        Price: 15000
    })
    const [Names, setNames]=useState(["Oppo","Samsung"])
    return (
        <div>
            <button onClick={()=>{setCompany("Lava")}}>Diplay Company</button>
            <button onClick={()=>{setMobiles({mobile1:"Oneplus",Colour:"White",Model:"Ace Racing",Price:"22000"})}}>Display Mobiles</button>
            <button onClick={()=>{setNames(["Lenova","Mi"])}}>Display Name</button>
            <h3>my Company Name is : {company}</h3>
            <p>{mobiles.mobile1}-{mobiles.Colour}-{mobiles.Model}-{mobiles.Price}</p>
            <ul>{Names.map((user,i)=>{
                return <li key={i}>{user}</li>
            })}</ul>
        </div>
    )
}