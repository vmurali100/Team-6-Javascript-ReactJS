import { Component } from "react";

export class Space extends Component {
    constructor(){
        super()
        this.state={
            names:"jet ship",
            place:{
               loc:"planet 1345",
               code:"4567"
            },
            part:["engine","source","A.I"]

        }
    }
    render() {
        return (<div>
            <h1>{this.state.names}</h1>
            <h2>{this.state.place.loc} {this.state.place.code}</h2>
            <ul>
            {this.state.part.map(function (user){
              return <li>{user}</li>
            })}
            </ul>
        </div>)
    }

}

   
