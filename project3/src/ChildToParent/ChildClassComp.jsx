import { Component } from "react";

export class ChildClassComp extends Component{
    constructor(props){
        super(props)
        this.state={
            message:"",
            person:{},
            students:[],
        }
    }
   
    render(){
        const {receivemessage,receiveperson,receivestudent}=this.props;
        return(
            <div>
               <button onClick={()=>{receivemessage("hello from child")}}>sendmessage </button>
               
               <button onClick={()=>{receiveperson(users[0])}}>sendperson</button>
               
               <button onClick={()=>{receivestudent(users)}}>sendstudent</button>
               
            </div>
        )
    }
}
var users=[
    {
        "fname": "Yvonne",
        "lname": "Efird",
        "tel": "(755)403-4619",
        "address": "2439 Magna Ct",
        "city": "Old Bridge",
        "state": "MA",
        "zip": 40059
    },
    {
        "fname": "Yeqing",
        "lname": "Llaneza",
        "tel": "(601)673-1851",
        "address": "520 Ac Ct",
        "city": "Lake Elsinore",
        "state": "KS",
        "zip": 88953
    },
    {
        "fname": "Renita",
        "lname": "Chadwick",
        "tel": "(958)302-0364",
        "address": "8283 Sed Dr",
        "city": "Lake Crystal",
        "state": "MD",
        "zip": 45063
    },
    {
        "fname": "Hathor",
        "lname": "Sari",
        "tel": "(274)170-8122",
        "address": "7382 Vitae Ave",
        "city": "Palmer",
        "state": "CO",
        "zip": 58482
    },
    {
        "fname": "Brendan",
        "lname": "Mauser",
        "tel": "(602)634-0629",
        "address": "5203 Odio Ct",
        "city": "Canton",
        "state": "TX",
        "zip": 91019
    },
    {
        "fname": "Marc",
        "lname": "Larson",
        "tel": "(318)087-7478",
        "address": "4823 Sollicitudin Dr",
        "city": "Mount Vernon",
        "state": "CO",
        "zip": 56959
    },
    {
        "fname": "Roy",
        "lname": "Reddick",
        "tel": "(945)482-5977",
        "address": "2571 Sagittis Ln",
        "city": "Savannah",
        "state": "OH",
        "zip": 43468
    },
    {
        "fname": "Leon",
        "lname": "Phuan",
        "tel": "(551)575-5007",
        "address": "4242 At Ave",
        "city": "Pasadena",
        "state": "NV",
        "zip": 25595
    },
    {
        "fname": "Andrea",
        "lname": "Grigsby",
        "tel": "(590)350-1705",
        "address": "9973 Morbi Ln",
        "city": "Roy",
        "state": "IN",
        "zip": 31604
    },
    {
        "fname": "Nona",
        "lname": "Bookwalter",
        "tel": "(723)373-9235",
        "address": "6341 Magna Rd",
        "city": "Clayton",
        "state": "CO",
        "zip": 21280
    }
]