import { Component } from "react";
import { Applecomp } from "./Applecomp";

export class Fruitcomp extends Component{ //child-Applecomp
    constructor(props){
        super(props)
        this.state={
            fruits:["banana","apple","orange","sapota"]
        }
    }
    render(){
        return (
            <div>
                <Applecomp allfruits={this.state.fruits}/>
            </div>
        )
    }
}