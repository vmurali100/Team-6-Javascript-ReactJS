import { Component } from "react";
import ChildComp7 from "./ChildComp7";

export class Sample7Comp extends Component{
    constructor(props){
        super(props)
        this.state = {colours: ["Red","Black","Blue","Yellow","Pink"]}
    }
    render(){
        return <div><ChildComp7 allColours={this.state.colours}/></div>
    }
}