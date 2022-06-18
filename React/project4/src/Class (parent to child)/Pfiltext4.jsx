import { Component } from "react";
import { PfiltextChild4 } from "./PfiltextChild4";

export class Pfiltext4 extends Component{
    constructor(){
        super()
        this.state={
            filltextusers:[
                {
                    "fname": "Kendra",
                    "lname": "Gray"
                },
                {
                    "fname": "Blake",
                    "lname": "Crantek"
                },
                {
                    "fname": "Cynthia",
                    "lname": "Manning"
                },
                {
                    "fname": "Tamika",
                    "lname": "Lau"
                },
                {
                    "fname": "Cathy",
                    "lname": "Planty"
                },
                {
                    "fname": "Ayse",
                    "lname": "Wagner"
                },
                {
                    "fname": "Claire",
                    "lname": "Murphy"
                },
                {
                    "fname": "Sharful",
                    "lname": "Kelton"
                },
                {
                    "fname": "Inho",
                    "lname": "Vanatta"
                },
                {
                    "fname": "Petra",
                    "lname": "Knight"
                }
            ]
        }
    }
    render(){
        return(
            <div>
                <PfiltextChild4 filltextDetails={this.state.filltextusers}/>
            </div>
        )
    }
}