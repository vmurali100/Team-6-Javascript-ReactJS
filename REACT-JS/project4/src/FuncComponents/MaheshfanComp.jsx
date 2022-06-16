import { useState } from "react";

export const MaheshfanComp = () => {
    const [myName, setMyName] = useState("Ram charan")
    const [person, setperson] = useState({
        fname: "maheshbabu",
        lname: "Alluarjun",
        email: "maheshkumar@gmail.com",


    })
    const [users, setusers] = useState(["hero", "director", "heroine", "producer", "music director", "camera man"])

    return <div>
        <button onClick={() => { setperson({ fname: "maheshbabu", lname: "Alluarjun", email: "mahesh@gmail.com" }) }}>display person details</button>

        <button onClick={() => { setusers(["radhika", "jeniliya", "eliyana", "trisha", "sneha"]) }}>display array</button>

        <button onClick={() => { setMyName(["naveen"]) }}>change name</button>

        <h1>my name is:{myName}</h1>

        <p>{person.fname}-{person.lname}-{person.email}</p>

        <ul>
            {users.map((user, i) => {
                return <li key={i}>{user}</li>
            })}
        </ul>


    </div>
}