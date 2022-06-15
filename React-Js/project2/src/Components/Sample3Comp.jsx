import { Component } from "react";
import ChildCompe3 from "./ChildComp3";

export class Sample3Comp extends Component{
    constructor(props){
        super(props)

        this.state = {user :["Lavanya","lasya","Ravi","Varun"]}
    }
    render(){
        return <div>
            <ChildCompe3 allUsers={this.state.user}/>
        </div>
    }
}