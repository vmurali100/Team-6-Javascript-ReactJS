import { Component } from "react";
import { Parrotcomp } from "./Parrotcomp";

export class Birdcomp extends Component{//child parrot
    constructor(props){
        super(props)
        this.state={
            users:["shobha","bavya","jaya","tulasi"]
        }
    }
    render(){
        return <div>
           <Parrotcomp allusers={this.state.users}/>
        </div>
    }
}