import { Component } from "react";
import ChildComp5 from "./ChildComp5";

export class Sample5Copm extends Component{
    constructor(props){
        super(props)
        this.state ={studentDetails:["Srinivas","35","thammineedis@gmail.com","Web Devloper"]}
    }
    render(){
        return <div>
            <ChildComp5 allstudents={this.state.studentDetails}/>
        </div>
    }
}