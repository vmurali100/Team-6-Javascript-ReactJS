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
            part:["engine","source","A.I"],
            show:false,
            shine:false

        }
    }
    change =()=>{
        this.setState({show:true})
    }
    chang =()=>{
        this.setState({shine:true})
    }
    render() {
        return (<div>
            <button onClick={this.change}>string</button>

            <button onClick={this.chang}>object</button>
           

            {this.state.show &&
            <h1>{this.state.names}</h1>}

           {this.state.shine &&
            <h2>{this.state.place.loc} {this.state.place.code}</h2>}
            <ul>
            {this.state.part.map(function (user,i){
              return <li  key={i}>{user}</li>
            })}
            </ul>
        </div>)
    }

}

   
