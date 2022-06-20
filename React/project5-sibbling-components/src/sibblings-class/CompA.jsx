import { Component } from "react";

export class CompA extends Component{
    constructor(){
        super()
        this.state={
            message:"hello welcome to comp1",
            person:{
                fname:"Radha",
                lname:"Boppana"
            },
            users:allusers
        }
    }
    render(){
        return(
            <div>
                <p>comp A</p>
                <button onClick={()=>{this.props.sendmessage(this.state.message)}}>send message</button>
                <button onClick={()=>{this.props.sendperson(this.state.person)}}>send person</button>
                <button onClick={()=>{this.props.sendusers(this.state.users)}}>send users</button>
            </div>
        )
    }
}
var allusers=[
    {
        "fname": "Agnes",
        "lname": "Theobald"
    },
    {
        "fname": "May",
        "lname": "Platt"
    },
    {
        "fname": "Vittorio",
        "lname": "Oliva"
    },
    {
        "fname": "Calvin",
        "lname": "Allshouse"
    },
    {
        "fname": "Roslyn",
        "lname": "Chandler"
    },
    {
        "fname": "Ahmad",
        "lname": "Rios"
    }
]