import { Component } from "react";
import { Childcom, Childcom1 } from "./Childcom1";
 

export class Practice1 extends Component{
    constructor(){
        super()
        this.state = {
             
            Users : ["Hyderabad","Bangalore","Kurnool","Tirupathi","Chennai"]

        }
    }
    render(){
        return (
            <div>
               <Childcom1 allUsers={this.state.Users}/>
                
            </div>
        )
    }
}