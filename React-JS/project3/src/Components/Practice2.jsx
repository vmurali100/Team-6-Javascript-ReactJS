import { Component } from "react";
import { ChildComponent } from "./ChildComponent";

export class Practice2 extends Component{
    constructor(){
        super()
        this.state = {
            Users : ["Hyderabad","Bangalore","Kurnool","Tirupathi","Chennai"]
        }
    }
    render(){
        return (
            <div>
                <ChildComponent allUsers={this.state.Users}/>
            </div>
        )
    }
}