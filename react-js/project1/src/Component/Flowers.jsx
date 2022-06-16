import { Component } from "react";
import { Roseflower } from "./Roseflower";

export class Flowers extends Component{
    constructor(props){
        super(props)
        this.state={
            flower:["rose","sunflower","jasmine"]
        }
    }
    render(){
        return <div>
            <Roseflower allflowers={this.state.flower}/>
        </div>
    }
}