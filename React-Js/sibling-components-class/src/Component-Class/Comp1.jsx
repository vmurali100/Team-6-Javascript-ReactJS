import { Component } from "react";

export default class Comp1 extends Component{
    constructor(props){
        super(props)

        this.state = {
            message: "Hello World From Component 1",
            person: {
                fname:"Vidya",
                lname:"Vasu"
            },
            users
        }
    }
    render(){
        return(
            <div>
                <p>Component 1</p>
                <button onClick={()=>{this.props.sendMessage(this.state.message)}}>Send Message</button>
                <br />
                <button onClick={()=>{this.props.sendPerson(this.state.person)}}>Send person</button>
                <br />
                <button onClick={()=>{this.props.sendUsers(this.state.users)}}>Send Users</button>
            </div>
        )
    }
}
var users = [
    {
        "id": 21,
        "email": "RMarin@et.org",
        "username": "GZiniel",
        "password": "ywa78"
    },
    {
        "id": 22,
        "email": "CCulp@neque.org",
        "username": "SReese",
        "password": "KjNO0"
    },
    {
        "id": 23,
        "email": "VQuintana@magna.net",
        "username": "BAbsalom",
        "password": "l48Rw"
    },
    {
        "id": 24,
        "email": "CDarling@aliquam.gov",
        "username": "CCavalier",
        "password": "a9OHF"
    },
    {
        "id": 25,
        "email": "VTerry@sollicitudin.io",
        "username": "RSueri",
        "password": "WBFge"
    },
    {
        "id": 26,
        "email": "HWebster@elementum.gov",
        "username": "TGershowitz",
        "password": "hU9Sg"
    },
    {
        "id": 27,
        "email": "EKoskovich@quis.gov",
        "username": "SSmoaks",
        "password": "XOdSJ"
    },
    {
        "id": 28,
        "email": "KDuffy@amet.io",
        "username": "EPointelin",
        "password": "ofF8K"
    },
    {
        "id": 29,
        "email": "AHadley@lacus.org",
        "username": "CKraenzle",
        "password": "2zTUx"
    },
    {
        "id": 30,
        "email": "LWalstead@eros.net",
        "username": "ZRich",
        "password": "MiKEq"
    }
]