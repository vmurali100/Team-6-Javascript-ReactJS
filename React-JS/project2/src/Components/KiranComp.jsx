import { Component } from "react";
import { ChildComp } from "./ChildComp";

export class KiranComp extends Component{
    constructor(props){
        super(props)

        this.state = {
            users:["Sai","Kiran","Virat","Kohli","Siraj","Hasaranga"]
        }
    }
    render(){
        return <div>
            <ChildComp Allusers={this.state.users}/>
        </div>
    }
}