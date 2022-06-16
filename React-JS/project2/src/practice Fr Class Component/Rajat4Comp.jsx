import { Component } from "react";
import { Child4Comp } from "./Child4Comp";

export class Rajat4comp extends Component{
    constructor (props){
        super(props)
        this.state ={
            users:["Sadik","Mubarak","Wahid","Nihkil","Akhil","rajini","Vijay"]
        }
    }
    render(){
        return(
            <div>
                <Child4Comp allusers={this.state.users}/>
            </div>
        )
    }
}