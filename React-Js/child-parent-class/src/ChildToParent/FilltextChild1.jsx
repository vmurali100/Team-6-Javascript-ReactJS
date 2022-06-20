import { Component } from "react";

export default class FilltextChild1 extends Component {
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
                <button onClick={()=>{receiveObject(allFilltext[0])}}>Send Person</button>
                <br />
                <button onClick={()=>{receiveArray(allFilltext)}}>Send Users</button>
                
            </div>
        )
    }
}
var allFilltext = [
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