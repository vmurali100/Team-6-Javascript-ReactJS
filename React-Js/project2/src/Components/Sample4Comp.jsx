import { Component } from "react";
import ChildComp4 from "./ChildComp4";

export class Sample4Comp extends Component{
    constructor(props){
        super(props)
        this.state={mobileNames: ["Apple","OnePlus","Mi","Moto"]}
    }
    render(){
        return <div>
            <ChildComp4 allMobiles={this.state.mobileNames}/>
        </div>
    }
}