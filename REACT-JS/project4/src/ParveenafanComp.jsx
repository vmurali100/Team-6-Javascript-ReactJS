import { useState } from "react";

export const ParveenafanComp = () => {
    const [myName, setMyName] = useState("Surumi")
    const [person, setperson] = useState({
        fname: "friend",
        lname: "besty",
        email: "parveena@gmail.com"

    })
    const [users, setusers] = useState(["chennai", "westmambalam", "Tnagar", "Anna nagar", "central", "kodambakkam"])

    return <div>
        <button onClick={() => { setperson({ fname: "friend", lname: "besty", email: "parveena@gmail.com" }) }}>display person details</button>

        <button onClick={() => { setusers(["divya", "sonia", "mani", "santhosh", "raghu","akbar","gokul"]) }}>display array</button>

        <button onClick={() => { setMyName(["pratheepkumar"]) }}>change name</button>

        <h1>my name is:{myName}</h1>

        <p>{person.fname}-{person.lname}-{person.email}</p>

        <ul>
            {users.map((user, i) => {
                return <li key={i}>{user}</li>
            })}
        </ul>


    </div>
}