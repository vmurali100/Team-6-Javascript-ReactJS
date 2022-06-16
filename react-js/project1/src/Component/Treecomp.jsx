import { Component } from "react";
import { Bananatreecomp } from "./Bananatreecomp"; //child-Bananatreecomp

export class Treecomp extends Component{
    constructor(props){
        super(props)
        this.state={
            trees:["neemtree","lemontree","coconuttree"]
        }
    }
    render(){
        return(
            <div>
                <Bananatreecomp alltrees={this.state.trees}/>
            </div>
        )
    }
}