import { Component } from "react";
import ChildComp8 from "./ChildCopm8";

export class Sample8Comp extends Component{
    constructor(props){
        super(props)
        this.state = {WashingMachine: ["LG","Samsung","IFB","Bosh"]}
    }
    render(){
        return <div><ChildComp8 allWashingMachine={this.state.WashingMachine}/></div>
    }
}