import { Component } from "react";
import { Child9Comp } from "./Child9Comp";

export class Dhanush9Comp extends Component{
    constructor(props){
        super(props)
        this.state={
           users:["Dhansuh","Karthik","Surya","Sanjai","Jeeva","Yuvan","Harsish"]
        }
    }
    render(){
        return(
            <div>
                <Child9Comp allusers={this.state.users}/>
            </div>
        )
    }
}