import { Component } from "react";
import { Greencolor } from "./Greencolor";

export class Colour extends Component{
    constructor(props){
        super(props)
        this.state={
            colors:["red","yellow","orange"]  //child-Greencolor
        }
    }
    render(){
        return <div>
            <Greencolor allcolors={this.state.colors}/>
        </div>
    }
}