import { Component } from "react"; //parent
import { Bargavicomp } from "./Bargavicomp";

export class Aruncomp extends Component{
    constructor(props){
        super(props)
        this.state={
            users:["gaja","reddy","ravi"]
        }
    }
    render(){
        return <div>
            <Bargavicomp allusers={this.state.users}/>
        </div>
    }
}