import { Component } from "react";
import { Pchild9 } from "./Pchild9";

export class Parent9 extends Component{
    constructor(){
        super()
        this.state={
            village:"Akkapalem",
            car:{
                name:"innova crysta",
                color:"Super White",
            },
            friends:["Mahitha","Harika","anusha"]
        }
    }
    render(){
        return(
            <div>
                <Pchild9 myVillage={this.state.village}
                myCar={this.state.car}
                myFriends={this.state.friends}/>
            </div>
        )
    }
}