import { Component } from "react";

export default class FilltextChild3 extends Component {
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
                <button onClick={()=>{receiveObject(allUsers[0])}}>Send Person</button>
                <br />
                <button onClick={()=>{receiveArray(allUsers)}}>Send Users</button>
                
            </div>
        )
    }
}
var allUsers = [
    {
        "fname": "Kurt",
        "lname": "Pachler",
        "tel": "(352)245-9248",
        "address": "820 Amet St",
        "city": "Augusta",
        "state": "IN",
        "zip": 89125
    },
    {
        "fname": "Augustine",
        "lname": "Hruska",
        "tel": "(601)087-8168",
        "address": "2309 Velit Rd",
        "city": "Swansea",
        "state": "DE",
        "zip": 91358
    },
    {
        "fname": "Christine",
        "lname": "Pfeifer",
        "tel": "(838)310-3553",
        "address": "5701 Tincidunt Ln",
        "city": "Fayetteville",
        "state": "NY",
        "zip": 68393
    },
    {
        "fname": "Deena",
        "lname": "Siflinger",
        "tel": "(235)202-1939",
        "address": "9219 Magna Dr",
        "city": "Palmer",
        "state": "CO",
        "zip": 16579
    },
    {
        "fname": "Kinnell",
        "lname": "Masson",
        "tel": "(575)486-9472",
        "address": "8936 Vestibulum Ln",
        "city": "Sinton",
        "state": "CT",
        "zip": 48854
    },
    {
        "fname": "Nerissa",
        "lname": "Schreiner",
        "tel": "(840)382-7817",
        "address": "8010 Dolor Ln",
        "city": "Decatur",
        "state": "NV",
        "zip": 95009
    },
    {
        "fname": "Amani",
        "lname": "Ziniel",
        "tel": "(588)640-8137",
        "address": "3312 Ante Ct",
        "city": "Valparaiso",
        "state": "CT",
        "zip": 79306
    },
    {
        "fname": "Vivian",
        "lname": "Krasowski",
        "tel": "(247)171-2394",
        "address": "6722 Adipiscing Ave",
        "city": "Henderson",
        "state": "MO",
        "zip": 16522
    },
    {
        "fname": "Tonya",
        "lname": "Guanzon",
        "tel": "(382)532-8368",
        "address": "6901 Egestas Dr",
        "city": "Colfax",
        "state": "MO",
        "zip": 78479
    },
    {
        "fname": "Vera",
        "lname": "Kailin",
        "tel": "(682)678-2729",
        "address": "878 In Rd",
        "city": "Hampstead",
        "state": "IN",
        "zip": 42070
    }
]