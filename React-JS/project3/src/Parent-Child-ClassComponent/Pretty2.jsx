import { Component } from "react";
import { Prettychild2 } from "./Prettychild2";

export class Pretty2 extends Component{
    constructor(){
        super()
        this.state={
            prettyusers:[
                {
                    "fname": "Brett",
                    "lname": "Faust",
                    "tel": "(922)166-2305",
                    "address": "367 Lectus Rd",
                    "city": "Louisville",
                    "state": "WA",
                    "zip": 70933
                },
                {
                    "fname": "Ritalerae",
                    "lname": "Strong",
                    "tel": "(763)424-5086",
                    "address": "9513 Sollicitudin Dr",
                    "city": "Bridgeport",
                    "state": "WA",
                    "zip": 86929
                },
                {
                    "fname": "Anteria",
                    "lname": "Scott",
                    "tel": "(740)868-0760",
                    "address": "9522 Velit Ct",
                    "city": "Johnson City",
                    "state": "NE",
                    "zip": 88590
                },
                {
                    "fname": "Kinnell",
                    "lname": "Willms",
                    "tel": "(149)010-1242",
                    "address": "2687 Vitae Ln",
                    "city": "Rahway",
                    "state": "VT",
                    "zip": 44097
                },
                {
                    "fname": "Sandro",
                    "lname": "Hathcock",
                    "tel": "(234)521-7442",
                    "address": "4347 Curabitur Ave",
                    "city": "Stettler",
                    "state": "MS",
                    "zip": 68017
                },
                {
                    "fname": "Stephanie",
                    "lname": "Mislang",
                    "tel": "(202)501-1939",
                    "address": "6841 Sollicitudin Ave",
                    "city": "Villa Rica",
                    "state": "SC",
                    "zip": 33542
                },
                {
                    "fname": "Tamika",
                    "lname": "Nagel",
                    "tel": "(981)924-9952",
                    "address": "9856 Consectetur Rd",
                    "city": "Atwater",
                    "state": "SC",
                    "zip": 98877
                },
                {
                    "fname": "Jawdat",
                    "lname": "Horman",
                    "tel": "(209)044-6839",
                    "address": "2653 Sollicitudin St",
                    "city": "Superior",
                    "state": "ID",
                    "zip": 98356
                },
                {
                    "fname": "Adrienne",
                    "lname": "Boudreaux",
                    "tel": "(429)813-1421",
                    "address": "8959 Libero Ln",
                    "city": "Chambersburg",
                    "state": "CA",
                    "zip": 19130
                },
                {
                    "fname": "Vincent",
                    "lname": "Bristow",
                    "tel": "(358)621-7738",
                    "address": "8063 At Ct",
                    "city": "Knoxville",
                    "state": "MT",
                    "zip": 21923
                }
            ]
        }
    }
    render(){
        return(
          <div>
            <Prettychild2 allprettys={this.state.prettyusers}/>
          </div>
        )
    }
}