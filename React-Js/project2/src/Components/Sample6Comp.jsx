import { Component } from "react";
import ChildComp6 from "./ChildComp6";

export class Sample6Comp extends Component{
    constructor(props){
        super(props)
        this.state = {flower: ["Rose","Jasmin","Lotus","lavender"]}
    }
    render(){
        return <div><ChildComp6 allFlower={this.state.flower}/></div>
    }
}