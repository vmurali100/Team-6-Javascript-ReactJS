import { Component } from "react";
import { PfiltextChild3} from "./PfiltextChild3";

export class Pfiltext3 extends Component{
    constructor(){
        super()
        this.state={
            filltextusers:[
                {
                    "fname": "Prince",
                    "lname": "Hutchings",
                    "tel": "(955)653-6580",
                    "address": "3851 Tortor Dr",
                    "city": "Saugus",
                    "state": "WY",
                    "zip": 41688
                },
                {
                    "fname": "Natasha",
                    "lname": "Krugel",
                    "tel": "(203)300-1514",
                    "address": "5785 Sapien St",
                    "city": "Anonymous",
                    "state": "WI",
                    "zip": 17491
                },
                {
                    "fname": "Nalika",
                    "lname": "Wathen",
                    "tel": "(835)377-1214",
                    "address": "776 Lectus Dr",
                    "city": "Greenville",
                    "state": "MO",
                    "zip": 40437
                },
                {
                    "fname": "Carolin",
                    "lname": "Jezak",
                    "tel": "(817)497-3060",
                    "address": "5365 Tortor Ave",
                    "city": "Stamford",
                    "state": "MS",
                    "zip": 53226
                },
                {
                    "fname": "Yauma",
                    "lname": "Ferreira",
                    "tel": "(527)270-6133",
                    "address": "3245 Amet Dr",
                    "city": "Hewitt",
                    "state": "MD",
                    "zip": 82535
                },
                {
                    "fname": "Roderic",
                    "lname": "Sharp",
                    "tel": "(510)011-8476",
                    "address": "8777 Curabitur Rd",
                    "city": "Adairsville",
                    "state": "IN",
                    "zip": 67999
                },
                {
                    "fname": "Natalie",
                    "lname": "Ragusa",
                    "tel": "(202)658-6589",
                    "address": "9675 Convallis Rd",
                    "city": "Boston",
                    "state": "WA",
                    "zip": 83758
                },
                {
                    "fname": "Kent",
                    "lname": "Kahlig",
                    "tel": "(770)903-2257",
                    "address": "1321 Consequat Dr",
                    "city": "Greensboro",
                    "state": "MO",
                    "zip": 29742
                },
                {
                    "fname": "Lorenzo",
                    "lname": "Presas",
                    "tel": "(928)337-4649",
                    "address": "4828 Curabitur Dr",
                    "city": "Gaithersburg",
                    "state": "AL",
                    "zip": 91917
                },
                {
                    "fname": "Rivka",
                    "lname": "Mislang",
                    "tel": "(215)475-4795",
                    "address": "8255 Quis Ave",
                    "city": "Bellevue",
                    "state": "WA",
                    "zip": 33802
                }
            ]
        }
    }
    render(){
        return(
            <div>
                <PfiltextChild3 filltextDetails={this.state.filltextusers}/>
            </div>
        )
    }
}