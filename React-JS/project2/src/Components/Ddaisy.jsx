import { Component } from "react";
import { Dchild } from "./Dchild";

export class Ddaisy extends Component{
    constructor(props){
        super(props)
        this.state={
            user:[" white","pink","red","blue"]
        }
    }
    render(){
        return(
            <div>
                <Dchild alluser={this.state.user}/>
            </div>
        )
    }
}