import { Component } from "react";
import { Truechild } from "./Truechild";

export class True extends Component{
    constructor(){
        super()
        this.state={
            true:[
                {
                    "fname": "Penny",
                    "lname": "Marr"
                },
                {
                    "fname": "Nicholas",
                    "lname": "Kemmerling"
                },
                {
                    "fname": "Sherry",
                    "lname": "Parker"
                },
                {
                    "fname": "Puranjay",
                    "lname": "Mahajan"
                },
                {
                    "fname": "Lowell",
                    "lname": "Mahan"
                },
                {
                    "fname": "Steven",
                    "lname": "Marin"
                },
                {
                    "fname": "Dione",
                    "lname": "Ciborowski"
                },
                {
                    "fname": "Cynthia",
                    "lname": "Pallesen"
                },
                {
                    "fname": "Gail",
                    "lname": "Cohn"
                },
                {
                    "fname": "Milton",
                    "lname": "Colgan"
                }
            ]
        }
    }
    render(){
        return(
            <div>
                <Truechild alltrue={this.state.true}/>
            </div>
        )
    }
}