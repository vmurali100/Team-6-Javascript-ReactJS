import React, { useState } from 'react'
import Comp1 from "./Comp1";
import Comp2 from "./Comp2";

 function ParentsClassSiblingsComponents() {
    const [Message, setMessage] = useState("");
    const [person, setperson] = useState({});
    const [Users, setUsers] = useState([])

    const sendMessage = (msg) => {
        setMessage(msg)
    }
    const sendperson = (person) => {
        setperson(person)
    }
    const sendUsers = (UsersInfo) => {
        setUsers(UsersInfo)
    }

    return (
        <div className="App">
            <Comp1 sendMessage={sendMessage} sendperson={sendperson} sendUsers={sendUsers} />
            <Comp2 Message={Message} person={person} Users={Users} />
        </div>
    )

}
export default ParentsClassSiblingsComponents