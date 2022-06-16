import { Component } from "react";
import { Pchild7 } from "./Pchild7";

export class Parent7 extends Component{
    constructor(){
        super()
        this.state={
            myName:"Srinivas",
            mobile:{
                brand:"oppo",
                color:"red",
                os:"Android"
            },
            places:["Goa","America","Maldives","Hydderabad"]
        }
    }
    render(){
        return(
            <div>
                <Pchild7 allmyName={this.state.myName}
                mymobiles={this.state.mobile}
                allplaces={this.state.places}/>
            </div>
        )
    }
}