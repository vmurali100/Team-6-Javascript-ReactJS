import { Component } from "react";
import { ClassChild3Fill3 } from "./ClassChild3Fill3";

export class ClassParent3Fill3 extends Component{
    constructor (){
        super()
        this.state={
              User:[
                {
                    "fname": "Sharad",
                    "lname": "Stallings"
                },
                {
                    "fname": "Randy",
                    "lname": "Kasuganti"
                },
                {
                    "fname": "Rebecca",
                    "lname": "Phillips"
                },
                {
                    "fname": "Fang",
                    "lname": "Kellams"
                },
                {
                    "fname": "Cary",
                    "lname": "Krasowski"
                },
                {
                    "fname": "Adrienne",
                    "lname": "Usgiveaway"
                },
                {
                    "fname": "Jess",
                    "lname": "Denbesten"
                },
                {
                    "fname": "Arturo",
                    "lname": "Tatum"
                },
                {
                    "fname": "Jasper",
                    "lname": "Morrow"
                },
                {
                    "fname": "Michelamone",
                    "lname": "Kliban"
                }
            ]
        }
    }
    render(){
        return(
            <div>
                <ClassChild3Fill3 allUser={this.state.User}/>
            </div>
        )
    }
}