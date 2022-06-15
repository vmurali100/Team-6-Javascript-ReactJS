import { useState } from "react"

export const DeepthiFunc = () => {
    const [myName, setMyname] = useState("deepthi") // react hooks
    const [person, setPerson] = useState({
        fname: "deepthi",
        lname: "boppana",
        email: "deepthiboppana@gmail.com"
    })
    const [users, setUsers] = useState(["goa", "dubai", "Ranchi", "Hyd"])
    return <div>
        {/* <button>display name</button> */}
        <button onClick={() => { setPerson({ fname: "jyothi", lname: "boppana", email: "jyothiboppana@gmail.com" }) }}>display personDetails</button>

        <button onClick={() => { setUsers(["ramcharan", "pawankalyan", "rana", "prabhas"]) }}>display array</button>

        <button onClick={() => { setMyname("vishnu") }}>change name</button>

        <h2>my name is :{myName}</h2>

        <p>{person.fname}-{person.lname}-{person.email}</p>
        
        <ul>{users.map((user, i) => {
            return <li key={i}>{user}</li>
        })}</ul>
    </div>

}