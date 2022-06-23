import React,{Component} from "react";

export default  class comp1 extends Component {
    constructor(props){
        super(props)

        this.state={
            Message:"Hiii Hello To React-Js",
            person:{
                Fname:"Naveen",
                Lname:"Kumar"
            },
            users:users
        }
    }
    render(){
        return(
            <div>
                <p>Comp1</p>
                <button onClick={()=>{this.props.sendMessage(this.state.Message)}}>Send Meassage</button>
                <button onClick={()=>{this.props.sendPerson(this.state.person)}}>Send person</button>
                <button onClick={()=>{this.props.sendusers(this.state.users)}}>Send users</button>
            </div>
        )
    }
    

}
var users=[
    {
        "fname": "Arzak",
        "lname": "Camire"
    },
    {
        "fname": "Fernando",
        "lname": "Garayan"
    },
    {
        "fname": "Alicia",
        "lname": "Melendez"
    },
    {
        "fname": "Leslie",
        "lname": "Comfort"
    },
    {
        "fname": "Jacalyn",
        "lname": "Eugene"
    },
    {
        "fname": "Cecelia",
        "lname": "Welte"
    },
    {
        "fname": "Maegan",
        "lname": "Woolverton"
    },
    {
        "fname": "Penny",
        "lname": "Kasprzak"
    },
    {
        "fname": "Dorothy",
        "lname": "Lang"
    },
    {
        "fname": "Jiby",
        "lname": "Schnell"
    }
]
