import { Component } from "react";

export class FilltextChild2 extends Component{
    constructor(){
        super()
        this.state={
            message:"",
            person:{},
            users:[]
        }
    }
    render(){
        const{recievemessage,recieveperson,recieveusers}=this.props
        return(
            <div>
                <button onClick={()=>{recievemessage("heloo welcome to class component")}}>send message</button>
                <button onClick={()=>{recieveperson(filltext[0])}}>send person</button>
                <button onClick={()=>{recieveusers(filltext)}}>send users</button>
            </div>
        )
    }
}
var filltext=[
    {
        "fname": "Abdul",
        "lname": "Travis"
    },
    {
        "fname": "Bill",
        "lname": "Stoltenberg"
    },
    {
        "fname": "Clyde",
        "lname": "Morse"
    },
    {
        "fname": "Jim",
        "lname": "Parham"
    },
    {
        "fname": "Shirley",
        "lname": "Schaffer"
    },
    {
        "fname": "Jaroslava",
        "lname": "Sober"
    },
    {
        "fname": "Kingi",
        "lname": "Schaffer"
    },
    {
        "fname": "Ty",
        "lname": "Pick"
    },
    {
        "fname": "Chiquita",
        "lname": "Martens"
    },
    {
        "fname": "Joseph",
        "lname": "Clagg"
    }
]