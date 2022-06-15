import { Component } from "react";
import ChildComp1 from "./ChildComp1";

export class Sample1Comp extends Component{
    constructor(props){
        super(props)

        this.state={
            users: ["Mamatha","Varun","Kiran"]
        }
    }
    render(){
        return <div>
            <ChildComp1 allUsers={this.state.users}/>
        </div>
    }
}