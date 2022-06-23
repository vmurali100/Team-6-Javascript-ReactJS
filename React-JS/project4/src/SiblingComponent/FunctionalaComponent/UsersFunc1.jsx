import { useState } from "react"

export const UsersFunc1=({sendmessage,message,sendperson,person,sendusers,users})=>{
         const []=useState(
            message="Varisu",
            person={
                fname:"Thalapathy",
                lname:"Vijay"
            },
            users=allusers
         )

         return(
            <div>
                <p>Thaman</p>
                <button onClick={()=>{sendmessage(message)}}>sendmessage</button>
                <button onClick={()=>{sendperson(person)}}>sendmessage</button>
                <button onClick={()=>{sendusers(users)}}>sendmessage</button>
            </div>
         )
}
var allusers=[
    {
        "fname": "Jayasankar",
        "lname": "Sai"
    },
    {
        "fname": "Jayasankar",
        "lname": "Raju"
    },
    {
        "fname": "Thala",
        "lname": "Dheena"
    },
    {
        "fname": "Sayad",
        "lname": "Rahman"
    },
    {
        "fname": "Harish",
        "lname": "harsish"
    },
    {
        "fname": "NIkki",
        "lname": "NIranjan"
    },
    {
        "fname": "Latonya",
        "lname": "Wallach"
    },
    {
        "fname": "Mayra",
        "lname": "Kiilerich"
    },
    {
        "fname": "Corretta",
        "lname": "Groll"
    },
    {
        "fname": "Polina",
        "lname": "Barrow"
    }
]