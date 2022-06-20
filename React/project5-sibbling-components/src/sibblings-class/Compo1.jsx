import { Component } from "react";

export class Compo1 extends Component{
    constructor(){
        super()
        this.state={
            message:"welcome",
            person:{
                fname:"Srinivas",
                lname:"boppana"
            },
            users:allusers
        }
    }
    render(){
        return(
            <div>
                <p>comp1</p>
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