import { Component } from "react";
import Child10 from "./Child10";
import Child6 from "./Child6";
import Child7 from "./Child7";
import Child8 from "./Child8";
import Child9 from "./Child9";

export default class Parent10 extends Component{
    constructor(props){
        super(props)
        this.state={
            name:"Ram",
            employee:{
                id:"23799200",
                salary:"500000"
            },
            graduate:["BCA","BBM","BCOM","MSCS","MPCS", "MECS"]
        }
    }
    render(){
        return(
            <div>
                <Child10 allnames={this.state.name}
                allemployee={this.state.employee}
                allgraduate={this.state.graduate}/>
            </div>
        )
    }
}