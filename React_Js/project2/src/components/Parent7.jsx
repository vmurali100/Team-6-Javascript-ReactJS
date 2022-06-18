import { Component } from "react";
import Child6 from "./Child6";
import Child7 from "./Child7";

export default class Parent7 extends Component{
    constructor(props){
        super(props)
        this.state={
            colors:["red","green","yellow","white","black", "pink","sky blue","voilet"]
        }
    }
    render(){
        return(
            <div>
                <Child7 allcolors={this.state.colors}/>
            </div>
        )
    }
}