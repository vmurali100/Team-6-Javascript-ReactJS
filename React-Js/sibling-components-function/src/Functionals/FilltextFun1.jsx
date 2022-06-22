import { useState } from "react"

export const FilltextFun1=({message,sendmessage,sendperson,person,filltext,sendfilltext}) => {
    const[]=useState(
        message="Hi welcome to Filltext Funtion1",
        person={
            name:"Varun",
            email:"varun@gmail.com",
            state:"Telangana",
            city:"Hyderabad"
        },
        filltext= allfilltext
    )
    return(
        <div>
            <button onClick={()=>{sendmessage(message)}}>send Message</button>
            <button onClick={()=>{sendperson(person)}}>send Person</button>
            <button onClick={()=>{sendfilltext(filltext)}}>send filltext</button>
        </div>
    )
}
var allfilltext = [
    {
        "id": 65,
        "email": "SIvanoski@velit.ly",
        "username": "SPeterman",
        "password": "dLFYK"
    },
    {
        "id": 66,
        "email": "MMontemer@convallis.io",
        "username": "IMcdonald",
        "password": "BKwgc"
    },
    {
        "id": 67,
        "email": "AAst@in.gov",
        "username": "NVrtis",
        "password": "8HmhC"
    },
    {
        "id": 68,
        "email": "RLopez@ante.com",
        "username": "MHruska",
        "password": "qCSXJ"
    },
    {
        "id": 69,
        "email": "NWeeks@tincidunt.org",
        "username": "VBolton",
        "password": "Ylaqf"
    },
    {
        "id": 70,
        "email": "CCoe@at.org",
        "username": "SDykstra",
        "password": "4OHaF"
    },
    {
        "id": 71,
        "email": "AHathcock@lorem.org",
        "username": "KShaw",
        "password": "yEOOG"
    },
    {
        "id": 72,
        "email": "EVidales@tellus.io",
        "username": "EKeltner",
        "password": "6KG9J"
    },
    {
        "id": 73,
        "email": "PReddin@nunc.net",
        "username": "RKeltner",
        "password": "zTqXc"
    },
    {
        "id": 74,
        "email": "SFournier@magna.org",
        "username": "KMauser",
        "password": "EEU3y"
    }
]