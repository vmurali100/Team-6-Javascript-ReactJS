import { useState } from "react";

export const GeethafanComp = () => {
    const [myName, setMyName] = useState("perumal")
    const [person, setperson] = useState({
        fname: "sundhari",
        lname: "raakumari",
        email: "sundhari@gmail.com"

    })
    const [users, setusers] = useState(["minister", "cheifminister", "prime minister", "incharge", "leader", "state head"])

    return <div>
        <button onClick={() => { setperson({ fname: "sundhari", lname: "raakumari", email: "raakumari@gmail.com" }) }}>display person details</button>

        <button onClick={() => { setusers(["place", "flower", "tourist place", "vizag", "moonar"]) }}>display array</button>

        <button onClick={() => { setMyName(["canada"]) }}>change name</button>

        <h1>my name is:{myName}</h1>

        <p>{person.fname}-{person.lname}-{person.email}</p>

        <ul>
            {users.map((user, i) => {
                return <li key={i}>{user}</li>
            })}
        </ul>


    </div>
}