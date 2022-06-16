import { Component } from "react"
import { Childcomp } from "./Childcomp"
//parent-sandhya,child
export class Sandhyacomp extends Component{
    constructor(props){ // send to another is called props
        super(props)

        this.state={
            users:["nithya","mani","hethvik"]
        }
    }
    render(){
        return (
            <div>
              <Childcomp allUsers={this.state.users}/>
            </div>
        )
             
    }
}