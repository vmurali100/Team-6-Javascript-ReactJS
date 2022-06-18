import { Component } from "react";
import Child2 from "./Child2";

export default class Parent2 extends Component{
    constructor(props){
        super(props)
        this.state={
            users:["mango","orange","watermilan","apple"]
        }
    }
    render(){
        return(
            <div>
                <Child2 allusers={this.state.users}/>
            </div>
        )
    }
}