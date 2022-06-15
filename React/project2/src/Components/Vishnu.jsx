import { Component } from "react";
import { ChildComp } from "./ChildComp";

  export class Vishnu extends Component{
    constructor(){
        super()
        this.state={
            users:["amma","nanna","akka","thambi"]
        }
    }
    render(){
        return (
            <div>
                <ChildComp allusers={this.state.users}/>
            </div>
        )
    }
 }