import { Component } from "react";

export class Sea extends Component {
    constructor(){
        super()
        this.state={
            names:"island",
            place:{
               loc:"pacific ocean",
               dis:"2000000 km"
            },
            vehi:["boat","arch","ship"]

        }
    }
    render() {
        return (<div>
            <h1>{this.state.names}</h1>
            <h2>{this.state.place.loc} {this.state.place.dis}</h2>
            <ul>
            {this.state.vehi.map(function (user){
              return <li>{user}</li>
            })}
            </ul>
        </div>)
    }

}

   
