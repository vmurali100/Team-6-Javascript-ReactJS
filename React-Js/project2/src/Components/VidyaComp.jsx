import { Component } from "react";
import ChildComp from "./ChildComp";

export class VidyaComp extends Component{
    constructor(props){
        super(props)

        this.state={
            users:["Vidya","Vasu","Mani","Kiran","Kumar"]
        }
    }
    render(){
        return <div>
            <ChildComp allUsers={this.state.users}/>
        </div>
    }
}