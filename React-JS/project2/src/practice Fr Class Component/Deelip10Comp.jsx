import { Component } from "react";
import { Child10Comp } from "./Child10Comp";

export class Deelip10Comp extends Component{
    constructor(props){
        super(props)
        this.state ={
            users:["RamCharan","Chiranjeevi","PavanKalyan","Varun","Sai","Vaishanav"]
        }
    }
    render(){
        return(
            <div>
                <Child10Comp allusers={this.state.users}/>
            </div>
        )
    }
}