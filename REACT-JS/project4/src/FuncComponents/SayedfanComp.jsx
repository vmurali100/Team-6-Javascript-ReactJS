import { useState } from "react";

export const dheenafanComp = () => {
    const [myName, setMyName] = useState("mahesh")
    const [person, setperson] = useState({
        fname: "divya",
        lname: "sree",
        email: "divyasree@gmail.com",
        city: "bangalore",
        state: "karnata"

    })
    const [users, setusers] = useState(["kohli", "sachin", "vikram", "banu", "kumar", "charulatha"])

    return <div>
        <button onClick={() => { setperson({ fname: "vandhana", lname: "chennai", email: "vandhanachennai@gmail.com",city:"bangalore",state:"karnataka" }) }}>display person details</button>

        <button onClick={() => { setusers(["sridevi", "ramana", "sireesha", "gopal", "leela", "krishna", "murali"]) }}>change my name</button>

        <button onClick={() => { setMyName(["revanth reddy"]) }}>change my name</button>

        <h1>my name is:{myName}</h1>

        <p>{person.fname}-{person.lname}-{person.email}-{person.city}-{person.state}</p>

        <ul>
            {users.map((user, i) => {
                return <li key={i}>{user}</li>
            })}
        </ul>


    </div>

}