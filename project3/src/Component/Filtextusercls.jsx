import { Component } from "react";
import { Filtextusertablecls } from "./Filtextusettablecls";

export class Filtextusercls extends Component{
    constructor(props){
        super(props)
        this.state={
            usercls:[
                {
                    "fname": "Minhajuddin",
                    "lname": "Authier",
                    "tel": "(667)977-1785",
                    "address": "4588 Porttitor St",
                    "city": "Concord",
                    "state": "DE",
                    "zip": 82519
                },
                {
                    "fname": "Hugh",
                    "lname": "Kelton",
                    "tel": "(539)248-2462",
                    "address": "6276 Vestibulum Ct",
                    "city": "Fe Warren Afb",
                    "state": "KY",
                    "zip": 31157
                },
                {
                    "fname": "Jean",
                    "lname": "Cantu",
                    "tel": "(711)243-4506",
                    "address": "4637 Risus Ct",
                    "city": "Chesterfield",
                    "state": "AR",
                    "zip": 68966
                },
                {
                    "fname": "Angela",
                    "lname": "Lukenbill",
                    "tel": "(526)188-4189",
                    "address": "3082 Mi Ct",
                    "city": "Point Richmond",
                    "state": "NY",
                    "zip": 85255
                },
                {
                    "fname": "Cesalie",
                    "lname": "Bowman",
                    "tel": "(714)020-2588",
                    "address": "2431 Massa Ct",
                    "city": "Mount Vernon",
                    "state": "SD",
                    "zip": 82502
                },
                {
                    "fname": "Larry",
                    "lname": "Kornation",
                    "tel": "(475)417-9184",
                    "address": "4939 Tincidunt Rd",
                    "city": "Leesburg",
                    "state": "KS",
                    "zip": 32362
                },
                {
                    "fname": "Jeanneth",
                    "lname": "Mcallister",
                    "tel": "(236)234-2095",
                    "address": "337 Et Rd",
                    "city": "Lockport",
                    "state": "LA",
                    "zip": 61719
                },
                {
                    "fname": "Steven",
                    "lname": "Lammers",
                    "tel": "(828)560-9870",
                    "address": "1765 Neque Ave",
                    "city": "Lititz",
                    "state": "NV",
                    "zip": 98776
                },
                {
                    "fname": "Grady",
                    "lname": "Whitham",
                    "tel": "(585)861-0428",
                    "address": "6152 Sit St",
                    "city": "Roxboro",
                    "state": "IA",
                    "zip": 62338
                },
                {
                    "fname": "Keith",
                    "lname": "Bolton",
                    "tel": "(297)148-6201",
                    "address": "6069 Rutrum Ln",
                    "city": "Annapolis",
                    "state": "NE",
                    "zip": 15930
                }
            ]
        }
    }
    render(){
        return(
            <div>
                <Filtextusertablecls allusercls={this.state.usercls}/>
            </div>
        )
    }

}