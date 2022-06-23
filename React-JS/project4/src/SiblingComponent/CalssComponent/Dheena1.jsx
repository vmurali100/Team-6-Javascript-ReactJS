import { Component } from "react";

export default class Dheena1 extends Component{
    constructor(props){
        super(props)
        this.state={
             message:"Hello Sibling Component",
             person:{
                fname:"Jayasankar",
                lname:"SaiKIran"
             },
             AllUsers,
        }
    }
    render(){
        return(
            <div>
                <button onClick={()=>{this.props.sendmessage(this.state.message)}}>SendMessage</button>
                <button onClick={()=>{this.props.sendperson(this.state.person)}}>SendPerson</button>
                <button onClick={()=>{this.props.sendAllUsers(this.state.AllUsers)}}>SendAllUsers</button>
            </div>
        )
    }
}
var AllUsers=[
    {
        "fname": "Marilynn",
        "lname": "Zamora"
    },
    {
        "fname": "Jason",
        "lname": "Neville"
    },
    {
        "fname": "Signia",
        "lname": "Reese"
    },
    {
        "fname": "Ginny",
        "lname": "Bombulie"
    },
    {
        "fname": "Kim",
        "lname": "Gage"
    },
    {
        "fname": "Kameko",
        "lname": "Demerath"
    },
    {
        "fname": "Jodie",
        "lname": "Flavin"
    },
    {
        "fname": "Joyce",
        "lname": "Rochester"
    },
    {
        "fname": "Theresa",
        "lname": "Griffin"
    },
    {
        "fname": "Charlyne",
        "lname": "Pick"
    }
]