import { Component } from "react";
import { Child7Comp } from "./Child7Comp";

export class Rakesh7Comp extends Component{
    constructor(props){
        super(props)
        this.state={
            users:["Rajamoili","Sukumar","Nelson","Sankar","KShiva","Vamshi"]
        }
    }
    render (){
        return(
            <div>
                <Child7Comp allusers={this.state.users}/>
            </div>
        )
    }
}