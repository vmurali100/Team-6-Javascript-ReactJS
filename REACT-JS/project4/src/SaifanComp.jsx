import { useState } from "react";

export const SaifanComp = () => {
    const [myName, setMyName] = useState("chinna")
    const [person, setperson] = useState({
        fname: "venkat",
        lname: "lakshman",
        email: "venkat@gmail.com"

    })
    const [users, setusers] = useState(["goa", "beach", "hyd", "ctr", "tpty", "katpadi"])

    return <div>
        <button onClick={() => { setperson({ fname: "venkat", lname: "lakshman", email: "venkat@gmail.com" }) }}>display person details</button>

        <button onClick={() => { setusers(["varma", "rgv", "alluarjun", "ramcharan", "ntr"]) }}>display array</button>

        <button onClick={() => { setMyName(["swarna latha"]) }}>change name</button>

        <h1>my name is:{myName}</h1>

        <p>{person.fname}-{person.lname}-{person.email}</p>

        <ul>
            {users.map((user, i) => {
                return <li key={i}>{user}</li>
            })}
        </ul>


    </div>
}