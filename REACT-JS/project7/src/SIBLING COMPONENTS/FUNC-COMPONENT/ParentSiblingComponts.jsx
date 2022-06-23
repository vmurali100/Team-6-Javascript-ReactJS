import React from "react";
import { useState } from "react";
import FComp1 from "./FComp1";
import FComp2 from "./FComp2";

function ParentsiblingComponents() {
    const [Message, setMessage] = useState("")
    const [person, setperson] = useState({})
    const [users, setusers] = useState([])

    const sendMessage = (Message) => {
        setMessage(Message)
    }
    const sendperson = (person) => {
        setMessage(person)
    }
    const sendusers = (users) => {
        setusers(users)
    }

    return (
        <div>
            <p>Functional Sibling Components</p>
            <FComp1 sendMessage={sendMessage} sendperson={sendperson} sendusers={sendusers} />
            <FComp2 Message={Message} person={person} users={users} />
        </div>
    )
}

export default ParentsiblingComponents