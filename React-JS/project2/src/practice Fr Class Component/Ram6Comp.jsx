import { Component } from "react";
import { Child6Comp } from "./Child6Comp";

export class Ram6Comp extends Component{
    constructor(){
        super()
        this.state={
             users:["KGF","RRR","Beast","Acharaya","Pushpa","Bigil","Master"]
        }
    }
    render(){
        return(
            <div>
                <Child6Comp allusers={this.state.users}/>
            </div>
        )
    }
}