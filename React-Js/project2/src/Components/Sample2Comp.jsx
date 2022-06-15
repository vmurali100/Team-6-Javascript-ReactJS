import { Component } from "react";
import ChildComp2 from "./ChildComp2";

export class Sample2Comp extends Component{
    constructor(props){
        super(props)
        this.state = {
            WashingMachine:["Moto","Lg","Bosh","IFB"]
        }
    }
    render(){
        return <div>
            <ChildComp2 allMachine={this.state.WashingMachine}/>
        </div>
    }
}