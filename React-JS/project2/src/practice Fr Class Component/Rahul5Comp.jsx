import { Component } from "react";
import { Child5Comp } from "./Child5Comp";

export class Rahul5Comp extends Component{
    constructor (props){
        super(props)
        this.state ={
           users:["KLrahul","Ishan","Surya","Dhoni","Karthik","Jadeja","Ashwin"]
        }
    }
    render (){
        return(
            <div>
                <Child5Comp allusers={this.state.users}/>
            </div>
        )
    }
}