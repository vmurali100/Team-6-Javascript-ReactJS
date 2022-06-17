import { useState } from "react"

export const Function2 = () => {
    const [myfruit, setmyfruit] = useState("orange");
    const [fruit, setfruit] = useState({
        color: "orange",
        layers: "two layers",
        seeds: "so many seeds"
    })
    const [fruits, setfruits] = useState(["Apple", "Banana", "Promogranate"])
    return <div>
        <button onClick={() => { setmyfruit("Dryfruits") }}>Change Name</button>
        <button onClick={() => { setfruit({ color: "red", layers: "one", seeds: "no of seeds" }) }}>change fruit</button>
        <button onClick={() => { setfruits(["grapes", "pineapple", "papaya"]) }}>change fruits</button>

        <h2>My fruit is:{myfruit}</h2>

        <p>{fruit.color} - {fruit.layers} - {fruit.seeds}</p>

        <ul>
            {fruits.map((user)=>{
                return<li>{user}</li>
            })}
        </ul>
    </div>
}