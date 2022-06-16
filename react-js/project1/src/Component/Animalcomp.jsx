import { Component } from "react";
import { Cowcomp } from "./Cowcomp"; //child-Cowcomp

export class Animalcomp extends Component{
    constructor(props){
        super(props)
        this.state={
          Animals:["lion","cow","tiger","goat"]
        }
    }
    render(){
        return (
            <div>
                <Cowcomp allanimals={this.state.Animals}/>
            </div>
        )
    }
}