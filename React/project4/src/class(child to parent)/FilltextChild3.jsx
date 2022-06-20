import { Component } from "react";

export class FilltextChild3 extends Component{
    constructor(){
        super()
        this.state={
            message:"",
            person:{},
            users:[]
        }
    }
    render(){
        const{receivemessage,receiveperson,receiveusers}=this.props
        return(
            <div>
                <button onClick={()=>{receivemessage("hello welcome to class component")}}>send message</button>
                <button onClick={()=>{receiveperson(allusers[1])}}>send person</button>
                <button onClick={()=>{receiveusers(allusers)}}>send users</button>

             
            </div>
        )
    }
}
var allusers=[
    {
        "id": 817,
        "email": "SBias@eros.com",
        "username": "BNimon",
        "password": "EzgDA"
    },
    {
        "id": 818,
        "email": "DCappellini@sit.ly",
        "username": "PKeen",
        "password": "TmIjD"
    },
    {
        "id": 819,
        "email": "CGeisbauer@magna.gov",
        "username": "TNeilson",
        "password": "kjl1z"
    },
    {
        "id": 820,
        "email": "FGladue@sed.ly",
        "username": "XSuchland",
        "password": "k8kJh"
    },
    {
        "id": 821,
        "email": "KPoe@vel.gov",
        "username": "ADehaven",
        "password": "Y3EKS"
    },
    {
        "id": 822,
        "email": "MMosher@in.ly",
        "username": "SDebord",
        "password": "CbePv"
    },
]