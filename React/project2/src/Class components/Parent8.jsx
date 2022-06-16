import { Component } from "react";
import { Pchild8 } from "./Pchild8";

export class Parent8 extends Component{
    constructor(){
        super()
        this.state={
            name:"Hanuma",
            bike:{
                name:"activa",
                modeel:2022,
                mileage:"50km/lit"
            },
            animals:["lion","tiger","elephant","Zebra"]
        }
    }
    render(){
        return(
            <div>
            <Pchild8 myName={this.state.name}
            myBike={this.state.bike}
            allAnimals={this.state.animals} />
            </div>
        )
    }
}