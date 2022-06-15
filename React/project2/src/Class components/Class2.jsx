import { Component } from "react";
import { Child2 } from "./Child2";

export class Class2 extends Component{
    constructor(){
        super()
        this.state={
            users:["RRR","Murari","Billa","King"]
        }
    }
    render(){
        return(
            <div>
              <Child2 allmovies={this.state.users}/>
            </div>
        )
    }
}