import { Component } from "react";
import FilltextChild5 from "./FilltextChild5";

export default class FilltextParent5 extends Component{
    constructor(props){
        super(props)

        this.state = {
            allUsers : [
                {
                    "fname": "Latia",
                    "lname": "Galapon",
                    "tel": "(849)728-8189",
                    "address": "4323 Morbi Ave",
                    "city": "Mount Morris",
                    "state": "FL",
                    "zip": 11987
                },
                {
                    "fname": "Pete",
                    "lname": "Eugene",
                    "tel": "(990)637-4821",
                    "address": "8856 Massa Ln",
                    "city": "Cheektowaga",
                    "state": "ME",
                    "zip": 96564
                },
                {
                    "fname": "Girish",
                    "lname": "Bastian",
                    "tel": "(110)945-0595",
                    "address": "6509 Augue Ave",
                    "city": "Jacksonville",
                    "state": "WI",
                    "zip": 44991
                },
                {
                    "fname": "Sara",
                    "lname": "Wheeler",
                    "tel": "(252)298-6229",
                    "address": "5127 Pulvinar St",
                    "city": "Bessemer City",
                    "state": "AK",
                    "zip": 31215
                },
                {
                    "fname": "Phillip",
                    "lname": "Kovich",
                    "tel": "(525)683-6573",
                    "address": "4432 Odio Ave",
                    "city": "Queen Creek",
                    "state": "MN",
                    "zip": 53623
                },
                {
                    "fname": "Felix",
                    "lname": "Reddin",
                    "tel": "(249)131-9638",
                    "address": "1216 Sed Dr",
                    "city": "Newburg",
                    "state": "WY",
                    "zip": 38778
                },
                {
                    "fname": "Darci",
                    "lname": "User",
                    "tel": "(234)628-9738",
                    "address": "9349 Sollicitudin Ln",
                    "city": "North Barrington",
                    "state": "CT",
                    "zip": 82268
                },
                {
                    "fname": "Chanel",
                    "lname": "Granzow",
                    "tel": "(290)230-1250",
                    "address": "6564 Non Dr",
                    "city": "New London Area",
                    "state": "NV",
                    "zip": 56221
                },
                {
                    "fname": "Terra",
                    "lname": "Budgell",
                    "tel": "(724)301-9893",
                    "address": "5835 Porta Rd",
                    "city": "Glendora",
                    "state": "MS",
                    "zip": 48250
                },
                {
                    "fname": "Jannae",
                    "lname": "Gilkerson",
                    "tel": "(924)143-2496",
                    "address": "1767 Porttitor Rd",
                    "city": "Madison",
                    "state": "OR",
                    "zip": 61758
                }
            ]
        }
    }
    render(){
        return(
            <div>
                <FilltextChild5 allFilltextDetails={this.state.allUsers}/>
            </div>
        )
    }
}