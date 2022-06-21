import { Component } from "react";

export default class Cfilltext1 extends Component{
    constructor(props){
        super(props)
        this.state={
            message:"Hello world from component",
            person:{
                fname:"M",
                lname:"Padmaja"
            },
            users:filltext,
        }
    }
    render(){
        return(
            <div>
                <button onClick={()=>{this.props.sendmessage(this.state.message)}}>send message</button>
                <button onClick={()=>{this.props.sendperson(this.state.person)}}>send person</button>
                <button onClick={()=>{this.props.sendusers(this.state.users)}}>send users</button>
                <p>Cfilltext1</p></div>
        )
    }
}
var filltext=[
    {
        "fname": "Nichelle",
        "lname": "Noriega",
        "tel": "(985)666-7987",
        "address": "1710 Libero Rd",
        "city": "Oklahoma City",
        "state": "AR",
        "zip": 99788
    },
    {
        "fname": "Bridgette",
        "lname": "Volz",
        "tel": "(660)296-8801",
        "address": "3386 Nec St",
        "city": "Austin",
        "state": "TX",
        "zip": 30873
    },
    {
        "fname": "Kate",
        "lname": "Langille",
        "tel": "(213)270-6363",
        "address": "7435 Morbi Dr",
        "city": "Paw Paw",
        "state": "KS",
        "zip": 71212
    },
    {
        "fname": "Francine",
        "lname": "Mott",
        "tel": "(648)379-8264",
        "address": "2824 Magna Ave",
        "city": "Winona Lake",
        "state": "MA",
        "zip": 79771
    },
    {
        "fname": "Saowalak",
        "lname": "Odonoghue",
        "tel": "(265)254-2584",
        "address": "5818 Sollicitudin Ave",
        "city": "Anonymous",
        "state": "NJ",
        "zip": 34594
    },
    {
        "fname": "Cherise",
        "lname": "Blunt",
        "tel": "(313)014-1757",
        "address": "3873 Orci Dr",
        "city": "Lake Elsinore",
        "state": "PA",
        "zip": 72428
    },
    {
        "fname": "Jasper",
        "lname": "Hadley",
        "tel": "(608)107-1244",
        "address": "7524 Tortor Rd",
        "city": "Lancaster",
        "state": "OR",
        "zip": 35276
    },
    {
        "fname": "Tariq",
        "lname": "Simpson",
        "tel": "(792)274-2780",
        "address": "1353 Facilisis St",
        "city": "Johnson City",
        "state": "MI",
        "zip": 64601
    },
    {
        "fname": "Jason",
        "lname": "Moffett",
        "tel": "(100)757-1120",
        "address": "2202 Quis Ln",
        "city": "Beltsville",
        "state": "NH",
        "zip": 91607
    },
    {
        "fname": "Cavanaugh",
        "lname": "Houston",
        "tel": "(790)768-1204",
        "address": "6021 Vitae Dr",
        "city": "Calgary",
        "state": "WV",
        "zip": 62706
    }
]