import { Component } from "react";
import { Ccartschild } from "./Ccartschild";
import { Cfilltextchild2 } from "./Cfilltextchild2";

export class Pfilltext2 extends Component{
    constructor(){
        super()
        this.state={
            filltextuser:[
                {
                    "fname": "Janelle",
                    "lname": "Sidaway"
                },
                {
                    "fname": "Hazel",
                    "lname": "Blunt"
                },
                {
                    "fname": "Lola",
                    "lname": "Hadley"
                },
                {
                    "fname": "Evan",
                    "lname": "Givens"
                },
                {
                    "fname": "Guadelupe",
                    "lname": "Pfeifer"
                },
                {
                    "fname": "Ryan",
                    "lname": "Cooper"
                },
                {
                    "fname": "Tania",
                    "lname": "Solomon"
                },
                {
                    "fname": "Kosta",
                    "lname": "Hancock"
                },
                {
                    "fname": "Larita",
                    "lname": "Montgomery"
                },
                {
                    "fname": "Dalton",
                    "lname": "Flamme"
                }
            ]
        }
    }
    render(){
        return(
            <div>
                <Cfilltextchild2 filltextdetails={this.state.filltextuser}/>
            </div>
        )
    }
}