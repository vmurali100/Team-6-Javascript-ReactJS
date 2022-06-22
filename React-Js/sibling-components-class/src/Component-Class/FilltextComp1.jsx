import { Component } from "react";

export default class FilltextComp1 extends Component{
    constructor(props){
        super(props)
        this.state={
            message: "Hello Filltext",
            person: {
                name: "Srividya",
                email: "vidyachowdary7@gmail.com",
                state: "AP",
                city: "Nagayalanka"
            },
            filltext
        }
    }
    render(){
        const{sendMessage,sendPerson,sendFilltext}=this.props;
        const{message,person,filltext}=this.state
        return(
            <div>
                <p>Filltext Component1</p>
                <button onClick={()=>{sendMessage(message)}}>Send Message</button>
                <button onClick={()=>{sendPerson(person)}}>Send Person</button>
                <button onClick={()=>{sendFilltext(filltext)}}>Send filltext</button>                
            </div>
        )
    }
}
var filltext =
[
    {
        "fname": "Lilia",
        "lname": "Klein"
    },
    {
        "fname": "Ahmad",
        "lname": "Leonard"
    },
    {
        "fname": "Haidi",
        "lname": "Ragusa"
    },
    {
        "fname": "Catherine",
        "lname": "Fruscione"
    },
    {
        "fname": "Kathleen",
        "lname": "Gaby"
    },
    {
        "fname": "Lakshmi",
        "lname": "Conk"
    },
    {
        "fname": "Dorota",
        "lname": "Lallemont"
    },
    {
        "fname": "Ralph",
        "lname": "Stair"
    },
    {
        "fname": "Glenderee",
        "lname": "Bookwalter"
    },
    {
        "fname": "Vernon",
        "lname": "Borisyuk"
    }
]