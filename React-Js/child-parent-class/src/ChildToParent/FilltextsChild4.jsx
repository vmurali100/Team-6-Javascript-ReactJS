import { Component } from "react";

export default class FilltextsChild4 extends Component {
    constructor(props){
        super(props)
        this.state = {
            message: "",
            person: {},
            users:[]
        }
    }
        
    render(){
        const{receiveString,receiveObject,receiveArray} = this.props
        return(
            <div>
                <button onClick={()=>{receiveString("Hi Wellcome to Filltext Component")}}>Send Massage</button>
                <br />
                <button onClick={()=>{receiveObject(allPersons[0])}}>Send Person</button>
                <br />
                <button onClick={()=>{receiveArray(allPersons)}}>Send Users</button>
                
            </div>
        )
    }
}
var allPersons =
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